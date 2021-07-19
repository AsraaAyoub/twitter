const db = require('../database/connection')
const path = require('path')
const jwt = require('jsonwebtoken')

const get = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/login.html'))
}

const post = (req, res) => {
    const data = req.body
    db.query('SELECT * FROM users WHERE email = $1', [data.email])
        .then(({ rows }) => {
            if (rows.length) {
                const user = rows[0]

                console.log(user)

                if (user.password !== data.password) {
                    res.send({ success: false, message: 'Incorrect password' })
                }

                const payload = jwt.sign({ email: user.email }, process.env.JWT_SECRET)
                res.cookie('token', payload, { maxAge: '5000000000' })

                res.send({ success: true })


            } else {
                res.send({ success: false, message: 'Incorrect email' })
            }
        })
        .catch((err) => {
            res.send({ success: false })
        })
}


module.exports = {
    get,
    post
}