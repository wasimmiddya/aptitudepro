const mongoose = require('mongoose')
const Learner = require('../models/Learner')

const {hashPassword} = require('../service/learner')

const saveRecord = async (req, res, next) => {
    let flag = false
    console.log(req.body);

    const {fname,lname,email,password} = req.body

    // Database connectivity logic
    await mongoose.connect(process.env.URI)
        .then(() => console.log('DB connected...'))
        .catch(error => console.error(error))

    /* Hashing the password */
    let hashedPssword = await hashPassword(password)
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
        flag = true
    } catch (error) {
        throw Error("Opps, something went wrong : " + error)
    } finally {
        if (flag) {
            res.status(200)
            res.json({
                status: 'OK',
                resMessage: 'You have successfully SignedUp.',
                data: {
                    fname: req.body.fname,
                    lname: req.body.lname,
                },
                isLoggedOn: true,
                logTime: new Date().toLocaleTimeString()
            })
        } else {
            res.status(400).json({
                status: 'FAILED',
                msg: 'Sorry, something went wrong! please try again later.'
            })
        }
        await mongoose.connection.close()
    }

    next()
}

module.exports = { saveRecord }