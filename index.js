const express = require('express')
const userRouter = require('./router/user.routes')
const porcessArouter = require('./router/a_process.routes')
const porcessBrouter = require('./router/b_process.routes')
const porcessCrouter = require('./router/c_process.routes')
const sequelize = require('./models')

const PORT = process.env.PORT || 8080
const app = express()

app.use(express.json())
app.use('/api', userRouter)
app.use('/a', porcessArouter)
app.use('/b', porcessBrouter)
app.use('/c', porcessCrouter)

app.get('/', (req, res) => {
    res.end(`Server started on ${PORT}...`)
})

app.listen(PORT, () => console.log(`Server started on ${PORT}...`))
