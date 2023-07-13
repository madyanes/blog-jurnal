// periksa atau buat username "madyan" dan password "madyan"
const checkOrCreateUsername = () => {
    if (!localStorage.getItem('username')) {
        localStorage.setItem('username', 'madyan')
        localStorage.setItem('password', 'madyan')
    }
}

// sembunyikan form login
const closeLoginForm = () => {
    document.querySelector('.form-login-popup').style.display = 'none';
}

// tampilkan form login
const openLoginForm = () => {
    document.querySelector('.form-login-popup').style.display = 'block';
}

// login
const login = () => {
    const username = document.querySelector('#username').value
    const password = document.querySelector('#password').value

    if (username === localStorage.getItem('username') && password === localStorage.getItem('password')) {
        document.querySelector('#login').style.display = 'none'
        document.querySelector('#logout').style.setProperty('display', 'inline', 'important')

        closeLoginForm()
    }
}

// logout
const logout = () => {
    console.log('logout')
    document.querySelector('#logout').style.display = 'none'
    document.querySelector('#login').style.setProperty('display', 'inline', 'important')
}


// eksekusi fungsi di bawah setelah dokumen ditampilkan keseluruhan
window.onload = checkOrCreateUsername()

// Event Listeners
document.querySelector('#login').addEventListener('click', openLoginForm)
document.querySelector('#btn-login-batal').addEventListener('click', closeLoginForm)
document.querySelector('#btn-login').addEventListener('click', login)
document.querySelector('#logout').addEventListener('click', logout)
