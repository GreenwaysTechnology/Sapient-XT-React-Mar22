function blockMe(message) {
    console.log(message)
}

//use timer
function login(userName, password) {
    //constructor 
    return new Promise((resolve, reject) => {
        if (userName === 'admin' && password === 'admin') {
            setTimeout(() => resolve('login success'), 1000)
        } else {
            setTimeout(() => reject('login failed'), 1000)

        }
    })

}


blockMe('start')
login('admin', 'admin')
    .then(status => console.log(status))
    .catch(err => console.log(err))
blockMe('end')