const path = require('path')
const db = require('../database/connection')

const get = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/signup.html'))
}

const post = (req, res) => {
    const data = req.body

    db.query('SELECT * FROM users WHERE email= $1', [data.email])
        .then((queryResponse) => {
            if (!queryResponse.rows.length) {

                db.query(`INSERT INTO users (name, email, password) 
                VALUES($1, $2, $3)`,
                    [data.name, data.email, data.password]
                )
                    .then(() => {
                        res.send({ success: true })
                    })

            } else {
                res.send({ success: false, message: 'Email already exist' })
            }
        })
        .catch((err) => {
            console.log(err)
            res.send({ success: false })
        })
}

module.exports = {
    get,
    post
}