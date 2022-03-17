function blockMe(message) {
    console.log(message)
}

//only success - resolve
//only failure - reject
//success or failure - resolve or reject

//only success - resolve
function getSuccess(){
    return Promise.resolve('Hello') // we Promise Object by encaspulating the success data
}


blockMe('start')
getSuccess().then(data=>console.log(data))
blockMe('end')