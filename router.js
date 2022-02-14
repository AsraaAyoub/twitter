const express = require("express")
const router = express.Router()
const loginHandler = require("./handlers/login")
const signupHandler = require("./handlers/signup")
const homeHandler = require("./handlers/home")
const tweetsHandler = require("./handlers/tweets")

const checkAuth = require("./middleware/checkAuth")

router.get("/login", loginHandler.get)
router.post("/login", loginHandler.post)
router.get("/signup", signupHandler.get)
router.post("/signup", signupHandler.post)
router.get("/tweets", checkAuth, tweetsHandler.get)
router.get("/create-tweet", checkAuth, tweetsHandler.createTweet)
router.post("/create-tweet", checkAuth, tweetsHandler.post)
router.post("/tweets/:id", checkAuth, tweetsHandler.postComment)

router.get("/logout", (req, res) => {
  res.clearCookie()
  res.redirect("/login")
})

module.exports = router
