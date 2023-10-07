const mongoose = require('mongoose')
const OTP = require('../models/OTP')
const Learner = require('../models/Learner')

require('dotenv').config()
const { DB_URI } = process.env


const saveOTP = async ({ email: email, otp: otp }) => {

    try {
        await mongoose.connect(DB_URI).then(() => {
            console.log('MongoDB connected.')
        }).catch(err => console.log(err))

        const genOTP = new OTP({ email: email, otp: otp })

        // const oldOTP = await OTP.findOne({email: email})

        await genOTP.save()

    } catch (err) {
        console.log(err)
    } finally {
        mongoose.connection.close()
    }
}


const verifyOTP = async (req, res, next) => {
    const { email, otp } = req.body

    try {
        await mongoose.connect(DB_URI).then(() => {
            console.log('MongoDB connected.')
        }).catch(err => console.log(err))

        const result = await OTP.findOne({ email, otp }).exec()

        if (result) {
            res.json({status: true})
            // Update the learner as verified learner
            await Learner.updateOne({email: email}, {$set: {verified: true}}).exec()
        } else {
            res.json({status: false})
        }
    } catch(err) {
        res.json({status: false})
        console.log(err)
    } finally {
        mongoose.connection.close()
    }
    
    next()
}

module.exports = { saveOTP, verifyOTP }