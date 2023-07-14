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

        localStorage.setItem('loginStatus', 1)
        showOrHidePostForm()
    }
}

// logout
const logout = () => {
    console.log('logout')
    document.querySelector('#logout').style.display = 'none'
    document.querySelector('#login').style.setProperty('display', 'inline', 'important')

    localStorage.setItem('loginStatus', 0)
    showOrHidePostForm()
}

// tampilkan atau sembunyikan form post
const showOrHidePostForm = () => {
    if (localStorage.getItem('loginStatus') == 1) {
        document.querySelector('#form-post').style.display = 'block'
        console.log(1)
    } else {
        document.querySelector('#form-post').style.display = 'none'
        console.log(2)
    }
}

// tampilkan posting baru
const createAndShowPost = () => {
    const new_post = document.querySelector('textarea').value
    
    if (localStorage.getItem('last_number') === null) {
        const last_number = 1
        localStorage.setItem(`new_post_${ last_number }`, new_post)
        console.log('kk')
    }
    
    const newParagraph = document.createElement('p')
    
    const post = document.querySelector('#content article:first-child')
    const copy = post.cloneNode(false)
    
    copy.appendChild(newParagraph).textContent = new_post
    post.parentNode.insertBefore(copy, post)
}


// eksekusi fungsi di bawah setelah dokumen ditampilkan keseluruhan
window.onload = checkOrCreateUsername()

// Event Listeners
document.querySelector('#login').addEventListener('click', openLoginForm)
document.querySelector('#btn-login-batal').addEventListener('click', closeLoginForm)
document.querySelector('#btn-login').addEventListener('click', login)
document.querySelector('#logout').addEventListener('click', logout)
document.querySelector('#form-post button').addEventListener('click', createAndShowPost)
