const tweetsList = document.querySelector('#tweets')

fetch('/tweets')
    .then((res) => res.json())
    .then((data) => {
        console.log(data)

        data.forEach(element => {
            const tweetItem = document.createElement('li')

            tweetItem.textContent = `${element.tweet} Made by: ${element.name}`

            tweetsList.appendChild(tweetItem)
        });
    })
    .catch((err) => {
        console.log(err)
    })