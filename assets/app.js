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

// notifikasi login dan logout
const loginLogoutNotif = (msg) => {
    document.querySelector('.notification p').textContent = msg
    document.querySelector('.notification').style.display = 'block'

    setInterval(() => {
        document.querySelector('.notification').style.display = 'none'
    }, 5000)
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
        loginLogoutNotif('Login Berhasil')
    }
}

// logout
const logout = () => {
    document.querySelector('#logout').style.display = 'none'
    document.querySelector('#login').style.setProperty('display', 'inline', 'important')

    localStorage.setItem('loginStatus', 0)
    showOrHidePostForm()
    loginLogoutNotif('Logout Berhasil')
}

// tampilkan atau sembunyikan form post
const showOrHidePostForm = () => {
    if (localStorage.getItem('loginStatus') == 1) {
        document.querySelector('#form-post').style.display = 'block'
    } else {
        document.querySelector('#form-post').style.display = 'none'
    }
}

// tampilkan posting baru
const createAndShowPost = () => {
    const new_post_title = document.querySelector('input[name="new-post-title"]').value
    const new_post = document.querySelector('textarea').value
    
    if (new_post !== '') {
        storePostToLocalStorage(new_post_title, new_post)
        retrieveLocalPosts()
    }
}

// tampilkan postingan baru
const retrieveLocalPosts = () => {
    if (!localStorage.getItem('localPosts')) {
        localStorage.setItem('localPosts', '[]')
    }

    let localPosts = JSON.parse(localStorage.getItem('localPosts'))

    localPosts.forEach(post => {
        const newTitle = document.createElement('h3')
        const newParagraph = document.createElement('p')
    
        const postNode = document.querySelector('#content article:first-child')
        const copy = postNode.cloneNode(false)
        
        const singlePost = JSON.parse(post)
        
        copy.appendChild(newTitle).innerHTML = singlePost[0]
        copy.appendChild(newParagraph).textContent = singlePost[1]
        
        postNode.parentNode.insertBefore(copy, postNode)    
    });
}

// simpan postingan baru
const storePostToLocalStorage = (title, post) => {
    const newPost = JSON.stringify([title, post])
    const localPosts = JSON.parse(localStorage.getItem('localPosts'))

    localPosts.push(newPost)
    
    localStorage.setItem('localPosts', JSON.stringify(localPosts))
}


// eksekusi fungsi di bawah setelah dokumen ditampilkan keseluruhan
window.onload = checkOrCreateUsername()
window.onload = retrieveLocalPosts()

// Event Listeners
document.querySelector('#login').addEventListener('click', openLoginForm)
document.querySelector('#btn-login-batal').addEventListener('click', closeLoginForm)
document.querySelector('#btn-login').addEventListener('click', login)
document.querySelector('#logout').addEventListener('click', logout)
document.querySelector('#form-post button').addEventListener('click', createAndShowPost)
