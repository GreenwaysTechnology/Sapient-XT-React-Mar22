function blockMe(message) {
    console.log(message)
}

//only success - resolve
//only failure - reject
//success or failure - resolve or reject

//only success - resolve
function getFailure(){
    return Promise.reject('something went wrong') // we Promise Object by encaspulating the success data
}


blockMe('start')
getFailure().catch(err=>console.log(err))
blockMe('end')