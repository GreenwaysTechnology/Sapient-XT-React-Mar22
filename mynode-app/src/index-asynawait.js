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

async function main() {
    try {
        let user = await getUser() //await will write then block for us
        let status = await login(user)
        let page = await showDashBoard(status)
        console.log(user, status, page)
    } catch (error) {
        console.log(error)
    }
}
main();