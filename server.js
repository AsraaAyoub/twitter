const express = require('express')
const cookieParser = require('cookie-parser')
const checkAuth = require('./middleware/checkAuth')

const app = express()
const port = process.env.PORT || 3000
const router = require('./router')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())



app.get('/', checkAuth, (req, res, next) => next())

app.use(express.static('public')) // app.get('/') -> index.html
app.use(router)

app.listen(port, () => {
    console.log(`Runs on http://localhost:${port}`)
})