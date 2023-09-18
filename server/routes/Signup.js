const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require('dotenv').config()
const bcrypt = require('bcryptjs')


const Learner = require('./../models/Learner')

/* Logic for hashing password */
async function hashPassword(plaintextPassword) {
    const saltRounds = 10;
  
    try {
      const hashedPassword = await bcrypt.hash(plaintextPassword, saltRounds);
      return hashedPassword;
    } catch (error) {
      throw new Error('Error hashing password:', error);
    }
  }

router.post('/signup', async (req, res) => {
    res.type('json')

    let flag = false

    await mongoose.connect(process.env.URI)
                        .then(()=>console.log('DB connected...'))
                        .catch(error => console.error(error))

    /* Hashing the password */
    let password = await hashPassword(req.body.password)
    console.log("Hashed Password",password);

    const learner = new Learner({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        password: password,
        created_on: new Date()
    })

    try {
        await learner.save()
        flag = true
    } catch(error) {
        console.error(error)
    } finally {
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
        await mongoose.connection.close()
    }

})

module.exports = router
