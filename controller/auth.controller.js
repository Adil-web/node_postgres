const db = require('../db')
const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { secret } = require('../config')

const generateAccessToken = (username, password, role) => {
    const payload = {
        username,
        password,
        role
    }
    return jwt.sign(payload, secret, {expiresIn: "24H"})
}

class AuthController {
    async registration(req, res) {
        try {
            const errors = validationResult(req)
            if(!errors.isEmpty()) {
                return res.status(400).json({message: "Ошибка при регистрации", errors})
            }
            const {username, password, role} = req.body
            const candidate = await db.query('SELECT * FROM users WHERE username = $1', [username])
            if(candidate.rows[0]) {
                return res.status(400).json({message: "Пользователь с таким именем уже существует"})
            }
            const hashPassword = await bcrypt.hash(password, 5)
            const user = await db.query('INSERT INTO users (username, password, role) values ($1, $2, $3) RETURNING *', [username, hashPassword, role || "USER"])
            const token = generateAccessToken(user.username, user.password, user.role)
            return res.json({message: "Пользователь успешно зарегистрирован", token})
        } catch (e) {
            console.log(e)
            res.status(400).json({message: "Registration error"})
        }
    }

    async login(req, res) {
        try {
            const errors = validationResult(req)
            if(!errors.isEmpty()) {
                return res.status(400).json({message: "Ошибка при авторизации", errors})
            }
            const {username, password} = req.body
            const user = await db.query(`SELECT * FROM users where username = $1`, [username])
            const comparePassword = bcrypt.compareSync(password, user.rows[0].password)

            if(comparePassword) {
                const token = generateAccessToken(user.username, user.password, user.role)
                res.json({token})
            }
        } catch (e) {
            console.log(e)
            res.status(400).json({message: "Login error"})
        }
    }

    async check(req, res) {
            let token = generateAccessToken(req.user.username, req.user.password, req.user.role);
    
            res.json({token});
    }
}

module.exports = new AuthController()
