const ACCOUNTS = require('../mock-data/accounts-data')
const express = require('express')

const accountsRouter = express.Router();

accountsRouter.get('/all', (req, res) => {
    res.status(200).json(ACCOUNTS)
})
//SAVE new account.
accountsRouter.post('/addNew', (req, res) => {
    //read data
    const account = req.body //get the input sent by client
    console.log(account);
    //save the new account
    const accounts = ACCOUNTS.concat(account)
    res.status(201).json(accounts)
})

//UPDATE - path parameter
accountsRouter.put('/:id', (req, res) => {
    const id = req.params.id

    //you have to write logic for update arrays and return updated array
    console.log(id);
    const account = ACCOUNTS.filter(account => account.accountNo == id)

    res.status(200).json(account)
})

//DELETE
accountsRouter.delete('/:id', (req, res) => {
    const id = req.params.id

    //you have to write logic for delete arrays and return updated array
    console.log(id);
    const account = ACCOUNTS.filter(account => account.accountNo == id)

    res.status(200).json(account)
})

module.exports = accountsRouter;
