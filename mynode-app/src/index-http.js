//build simple http server and app
//import 
const http = require('http')

//create server and app to handle client request.
const server = http.createServer((req, res) => {
    //receive request and handle response in non blocking way
   res.end('Hello')
})

//start the server
server.listen(3000,()=>{
    console.log(server.address(),"Server is Running")
})

