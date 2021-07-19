const form = document.querySelector('form')
const name = document.querySelector('#name')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirmPassword')


form.addEventListener('submit', (e) => {
    e.preventDefault()

    const data = {
        name: name.value,
        email: email.value,
        password: password.value,
        confirmPassword: confirmPassword.value,
    }

    fetch('/signup', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.success) {
                window.location.href = '/login'
            } else {
                // show error in the page
            }
        })
        .catch((err) => {
            console.log(err)
            // show error in the page
        })

})