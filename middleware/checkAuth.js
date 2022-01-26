const jwt = require('jsonwebtoken')


module.exports = (req, res, next) => {
    const token = req.cookies.token

    if (!token) {
        res.redirect('/login')
        return;
    }

    try {

        const user = jwt.verify(token, process.env.JWT_SECRET)

        // user -> { email: 'julian@google.com }
        req.user = user

        next()
    } catch (error) {
        res.redirect('/login')
    }


}