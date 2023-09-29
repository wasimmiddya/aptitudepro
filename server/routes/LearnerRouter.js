const express = require('express')
const LearnerRouter = express.Router()
require('dotenv').config()


const signup = require('../controller/signupController')


router.post('/signup',signup, async (req, res) => {
    res.type('json')



    let flag = signup()
    
    if(flag) {
        res.status(200)
        res.json({
            status: 'OK',
            resMessage: 'You have successfully signedup.',
            data: {
                fname: req.body.fname,
                lname: req.body.lname,
            },
            isLoggedOn: true,
            logTime: new Date().toLocaleTimeString()
        })
    } else {
        res.status(401)
        res.send('Failed to signup...')
    }
})




module.exports = LearnerRouter