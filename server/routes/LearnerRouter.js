const express = require('express')
const router = express.Router()
require('dotenv').config()

const jwt = require('jsonwebtoken')

const signupController = require('../controller/signup')
const verifyController = require('../controller/verify')
const loginController = require('../controller/login')

router.post("/signup", signupController.saveRecord)
router.post("/verify", verifyController.verifyOTP)
router.post("/login", loginController.login)

router.post('/auth', (req, res) => {
    const {token} = req.cookies
    if(!token) return res.json({success: false, message: 'session ended'})
    jwt.verify(token,'skey',(err, decoded) => {
        return res.status(200).json({success:true, decoded})
    })
})

router.get('/auth', (req, res) => {
    console.log(req.cookies)
    const {token} = req.cookies
    jwt.verify(token,'skey',(err, decoded) => {
        console.log(decoded)
        res.status(200).json(decoded)
    })
})

module.exports = router