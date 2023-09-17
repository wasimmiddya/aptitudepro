const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require('dotenv').config()
const bcrypt = require('bcryptjs')


const Learner = require('./../models/Learner')

const setHash = (password) => {
    bcrypt.hash(password,8, (err,hash) =>{

    })
}

router.post('/signup', async (req, res) => {

    await mongoose.connect(process.env.URI)
                        .then(()=>console.log('DB connected...'))
                        .catch(error => console.error(error))

    let flag = false
    let password = await setHash(req.body.password)

    const learner = new Learner({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        password: password,
        created_on: new Date()
    })
// password checking 
    try {
        await learner.save()
        flag = true
    } catch(error) {
        console.error(error)
    } finally {
        if(flag) {
            res.status(200)
            res.send('SignUp successfully...')
        } else {
            res.status(401)
            res.send('Failed to signup...')
        }
        await mongoose.connection.close()
    }

})

module.exports = router
