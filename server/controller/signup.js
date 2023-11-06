// Node dependencies
const mongoose = require('mongoose')
const Learner = require('../models/Learner')

// User define dependencies
const learnerService = require('../service/learnerService')
const VerifyController = require('../controller/verify')

const saveRecord = async (req, res, next) => {
    let flag = false
    console.log(req.body);

    const {fname,lname,email,password} = req.body

    // Database connectivity logic
    await mongoose.connect(process.env.DB_URI)
        .then(() => console.log('DB connected...'))
        .catch(error => console.error(error))

    /* Hashing the password */
    let hashedPssword = await learnerService.hashPassword(password)
    console.log("Hashed Password", hashedPssword);

    const learner = new Learner({
        fname,
        lname,
        email,
        password: hashedPssword,
        verified: false, // initially false befor verification.
        createdAt: Date(),
    })

    try {
        await learner.save()
        let otp = learnerService.generateOTP()
        
        otpInfo = {email: email, otp: otp}
        await VerifyController.saveOTP(otpInfo)
        flag = await learnerService.sendOTP(otpInfo)
    } catch (error) {
        console.log(error);
    } finally {
        if (flag) {
            res.status(201)
            res.json({
               status: true,
               email,
               user: `${fname} ${lname}`
            })
        } else {
            res.status(401).json({
                status: false,
                msg: 'Sorry, something went wrong! please try again later.'
            })
        }
        await mongoose.connection.close()
    }

    next()
}

module.exports = { saveRecord }