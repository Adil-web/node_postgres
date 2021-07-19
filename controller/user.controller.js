const db = require('../db')
const axios = require('axios')

class UserController {
    async createUser(req, res) {
        const {username, password} = req.body
        const newUser = await db.query(`INSERT INTO users (username, password, role) values ($1, $2, $3) RETURNING *`, [username, password, 'USER'])
        res.json(newUser.rows[0])
    }
    async getUsers(req, res) {
        const users = await db.query(`SELECT * FROM users`)
        res.json(users.rows)
    }
    async getOneUser(req, res) {
        const id = req.params.id
        const users = await db.query(`SELECT * FROM users where id = $1`, [id])
        res.json(users.rows[0])

    }
    async updateUser(req, res) {
        const {id, username, password} = req.body
        const user = await db.query('UPDATE users set username = $1, password = $2 where id = $3 RETURNING *', [username, password, id])
        res.json(user.rows[0])
    }
    async deleteUser(req, res) {
        const id = req.params.id
        const user = await db.query('DELETE FROM users where id = $1 RETURNING *', [id])
        res.json(user.rows[0])
    }

    async getTodos(req, res) {
        const todos = await db.query(`SELECT * FROM todos`)
        res.json(todos.rows)
    }
    async setTodo(req, res) {
        axios
            .get('https://jsonplaceholder.typicode.com/todos/1')
            .then(async json => {
                let newTodo
                if(json.data.length > 1) {
                    json.data.forEach(async data => {
                        const {id, title, completed} = data
                        newTodo = await db.query(`INSERT INTO todos (id, title, completed) values ($1, $2, $3) RETURNING *`, [id, title, completed])
                    })
                    res.json(newTodo.rows[0])
                } else {
                    const {id, title, completed} = json.data
                    newTodo = await db.query(`INSERT INTO todos (id, title, completed) values ($1, $2, $3) RETURNING *`, [id, title, completed])
                    res.json(newTodo.rows[0])
                    res.json(json.data)
                }
            })
            .catch(err => res.json(err))
    }

}

module.exports = new UserController()
