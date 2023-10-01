const express = require('express')
const router = express.Router()
require('dotenv').config()

const signupController = require('../controller/signup')

router.post("/signup", signupController.saveRecord)



module.exports = router