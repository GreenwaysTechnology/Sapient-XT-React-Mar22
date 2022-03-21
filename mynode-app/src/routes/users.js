const express = require('express')

const userRouter = express.Router();

userRouter.get('/all', (req, res) => {
    res.status(200).json([
        { id: 1, name: 'a1' },
        { id: 2, name: 'a2' },
    ])
})

module.exports = userRouter;
