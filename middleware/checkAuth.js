const jwt = require('jsonwebtoken')


module.exports = (req, res, next) => {
    const token = req.cookies.token

    if (!token) {
        res.redirect('/login')
        return;
    }

    const user = jwt.verify(token, process.env.JWT_SECRET)

    req.user = user

    next()
}