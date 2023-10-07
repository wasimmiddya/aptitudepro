const express = require('express')
const router = express.Router()
require('dotenv').config()

const signupController = require('../controller/signup')
const verifyController = require('../controller/verify')

router.post("/signup", signupController.saveRecord)

router.post("/verify", verifyController.verifyOTP)

module.exports = router