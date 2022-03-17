function getUser() {
    console.log('get user is called')
    let user = {
        id: 1,
        name: 'admin'
    }
    //user = null
    let error = {
        code: 500,
        message: 'User not found'
    }
    return new Promise((resolve, reject) => {
        if (user) {
            setTimeout(() => resolve(user), 1000)
        } else {
            setTimeout(() => reject(error), 1000)
        }
    })


}
function login(user) {
    console.log('login  is called')

    return new Promise((resolve, reject) => {
        let status = 'login success'
        let error = 'login failed'
        if (user.name === 'admin') {
            setTimeout(() => resolve(status), 1000)
        } else {
            setTimeout(() => reject(error), 1000)
        }
    })
}
function showDashBoard(status) {
    console.log('show dashboard is called')
    return new Promise((resolve, reject) => {
        let homePage = 'Home Page'
        let ErrorPage = 'Error Page'
        if (status === 'login success') {
            setTimeout(() => resolve(homePage), 1000)
        } else {
            setTimeout(() => reject(ErrorPage), 1000)
        }
    })
}

function main() {
    //callback nesting
    // getUser(user => {
    //     console.log(user)
    //     login(user, status => {
    //         console.log(status)
    //         showDashBoard(status, page => {
    //             console.log(page)
    //         }, error => {
    //             console.log(error)
    //         })
    //     }, error => {
    //         console.log(error)
    //     })
    // }, error => {
    //     console.log(error)

    // })

    //promise -v1
    // getUser()
    //     .then(user => {
    //         console.log(user)
    //         login(user)
    //             .then(status => {
    //                 console.log(status)
    //                 showDashBoard(status)
    //                     .then(page => {
    //                         console.log(page)
    //                     })
    //                     .catch(error => console.log(error))
    //             }).catch(error => console.log(error))
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })

    //remove multi nested then and catch
    // getUser()
    //     .then(user => {
    //         return login(user)
    //     })
    //     .then(status => {
    //         return showDashBoard(status)
    //     })
    //     .then(page => {
    //         console.log(page)
    //     })
    //     .catch(error => console.log(error))
    getUser()
        .then(user => login(user))
        .then(status => showDashBoard(status))
        .then(page => console.log(page))
        .catch(error => console.log(error))

}
main();