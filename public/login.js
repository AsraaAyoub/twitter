const form = document.querySelector('form')
const email = document.querySelector('#email')
const password = document.querySelector('#password')


form.addEventListener('submit', (e) => {
    e.preventDefault()

    const data = {
        email: email.value,
        password: password.value,
    }

    fetch('/login', {
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