//callbacks
function blockMe(message) {
    console.log(message)
}
//non blocking :Higher order function  : function as parameter
function delay(callback) {
    //wrap this inside async api 
    setTimeout(() => callback('Hello,I am delayed response'), 5000)
}

blockMe('start')
delay((data)=> {
    console.log(data)
})
blockMe('end')