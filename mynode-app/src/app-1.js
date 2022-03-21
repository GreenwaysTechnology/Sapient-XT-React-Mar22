const express = require('express')
const bodyParser = require('body-parser')

//account db
const ACCOUNTS = [{
    accountNo: 1234223,
    name: 'Subramanian',
    openingbalance: 10000,
    closingbalance: 20000,
    branch: 'cbe'
},
{
    accountNo: 345343,
    name: 'Ram',
    openingbalance: 560000,
    closingbalance: 2890000,
    branch: 'Chn'
},
{
    accountNo: 3232323,
    name: 'John',
    openingbalance: 1454500,
    closingbalance: 22323,
    branch: 'DEL'
}
];

//create application object 
const app = express();


//initialize the middlewares -  body-parser
app.use(bodyParser.json())



//app you can expose rest api

//HTTP - GET mapping
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcom to C-Bank' })
})

//CURD operations
//GEt All account
app.get('/api/accounts/all', (req, res) => {
    res.status(200).json(ACCOUNTS)
})
//SAVE new account.
app.post('/api/accounts/addNew',(req,res)=>{
    //read data
    const account = req.body //get the input sent by client
    console.log(account);
    //save the new account
    const accounts = ACCOUNTS.concat(account)
    res.status(201).json(accounts)
})

//UPDATE - path parameter
app.put('/api/accounts/:id',(req,res)=>{
  const id = req.params.id
  
  //you have to write logic for update arrays and return updated array
  console.log(id);
  const account = ACCOUNTS.filter(account=>account.accountNo==id)

  res.status(200).json(account)
})



//DELETE
app.delete('/api/accounts/:id',(req,res)=>{
    const id = req.params.id
    
    //you have to write logic for delete arrays and return updated array
    console.log(id);
    const account = ACCOUNTS.filter(account=>account.accountNo==id)
  
    res.status(200).json(account)
  })
  

//you can start the server
app.listen(3000, () => {
    console.log('Express Server is running')
})

