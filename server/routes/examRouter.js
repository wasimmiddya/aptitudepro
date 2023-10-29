const express = require('express')
const router = express.Router()

const {getQuestions} = require('../controller/exam')
const {evaluate} = require('../controller/evaluate')
 
router.post('/qes', getQuestions)
router.post('/eval', evaluate)

module.exports = router