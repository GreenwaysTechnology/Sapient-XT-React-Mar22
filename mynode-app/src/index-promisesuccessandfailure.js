function blockMe(message) {
    console.log(message)
}


function login(userName, password) {
    if (userName === 'admin' && password === 'admin') {
        return Promise.resolve('login success')
    }
    return Promise.reject('Login is failed')
}


blockMe('start')
login('admin', 'admin')
    .then(status => console.log(status))
    .catch(err => console.log(err))
blockMe('end')