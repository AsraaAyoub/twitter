const db = require("../database/connection")
const path = require("path")

// fetch all tweets
const get = (req, res) => {
  db.query(
    `
            SELECT tweets.id, comments.comment, users.name, tweets.tweet 
            FROM tweets INNER JOIN users
            ON users.id = tweets.userid
            LEFT JOIN comments
            ON comments.tweetid = tweets.id
        `
  )
    .then(({ rows }) => {
      res.send(rows)
    })
    .catch((err) => {
      //
      console.log(err)
    })
}

const post = (req, res) => {
  console.log(req.body)
  console.log(req.user)

  db.query("SELECT id FROM users WHERE email = $1", [req.user.email])
    .then(({ rows }) => {
      const id = rows[0].id

      db.query(
        `INSERT INTO tweets (tweet, userid)
                VALUES($1, $2)`,
        [req.body.text, id]
      ).then(() => {
        res.send({ success: true })
      })

      console.log(rows)
      console.log(id)
    })
    .catch((err) => {
      console.log(err)
      res.send({ success: false })
    })
}

const createTweet = (req, res) => {
  res.sendFile(path.join(__dirname, "../public/create-tweet.html"))
}

// TASK - Add a new comment to the tweet then redirect back to the main page
const postComment = (req, res) => {
  db.query(
    "INSERT INTO comments (comment, tweetid, userid) VALUES ($1, $2, $3)",
    [req.body.comment, req.params.id, req.user.id]
  )
    .then(() => {
      res.redirect("/")
    })
    .catch((err) => {
      console.log(err)
    })
}

module.exports = {
  get,
  post,
  createTweet,
  postComment,
}
