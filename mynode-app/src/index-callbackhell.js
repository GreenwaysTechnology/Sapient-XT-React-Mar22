//sequential calls in blocking mode 

function getUser(success, failure) {
    let user = {
        id: 1,
        name: 'admin'
    }
    //user = null
    let error = {
        code: 500,
        message: 'User not found'
    }
    if (user) {
        setTimeout(() => success(user), 1000)
    } else {
        setTimeout(() => failure(error), 1000)
    }

}
function login(user, success, failure) {
    let status = 'login success'
    let error = 'login failed'
    if (user.name === 'admin') {
        setTimeout(() => success(status), 1000)
    } else {
        setTimeout(() => failure(error), 1000)
    }
}
function showDashBoard(status, success, failure) {
    let homePage = 'Home Page'
    let ErrorPage = 'Error Page'
    if (status === 'login success') {
        setTimeout(() => success(homePage), 1000)
    } else {
        setTimeout(() => failure(ErrorPage), 1000)
    }
}

function main() {
//callback nesting
    getUser(user => {
        console.log(user)
        login(user, status => {
            console.log(status)
            showDashBoard(status, page => {
                console.log(page)
            }, error => {
                console.log(error)
            })
        }, error => {
            console.log(error)
        })
    }, error => {
        console.log(error)
    })

}
main();