const tweetsList = document.querySelector("#tweets")

fetch("/tweets")
  .then((res) => res.json())
  .then((data) => {
    console.log(data)

    data.forEach((element) => {
      const tweetItem = document.createElement("li")
      const commentForm = document.createElement("div")

      tweetItem.textContent = `${element.tweet} Made by: ${element.name}`

      // TASK: if there is a comment do not show a form
      if (element.comment) {
        commentForm.textContent = `${element.comment}`
      } else {
        commentForm.innerHTML = `<form action="/tweets/${element.id}" method="POST">
            <input type="text" name="comment" placeholder="Comment">
            <input type="submit" value="Comment">
            </form>`
      }

      tweetItem.appendChild(commentForm)

      tweetsList.appendChild(tweetItem)
    })
  })
  .catch((err) => {
    console.log(err)
  })
