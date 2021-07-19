const form = document.querySelector('form')
const text = document.querySelector('#text')


form.addEventListener('submit', (e) => {
    e.preventDefault()

    const data = {
        text: text.value,
    }

    fetch('/create-tweet', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.success) {
                window.location.href = '/'
            } else {
                // show error in the page
            }
        })
        .catch((err) => {
            console.log(err)
            // show error in the page
        })

})