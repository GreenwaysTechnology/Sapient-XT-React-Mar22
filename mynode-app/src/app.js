const express = require('express')
const bodyParser = require('body-parser')
const accountsRouter = require('./routes/accounts')
const userRouter = require('./routes/users')
//create application object 
const app = express();
//initialize the middlewares -  body-parser
app.use(bodyParser.json())

//register router
app.use('/api/accounts',accountsRouter)
app.use('/api/users',userRouter)



//HTTP - GET mapping
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcom to C-Bank' })
})

//you can start the server
app.listen(3000, () => {
    console.log('Express Server is running')
})

