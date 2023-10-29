const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()


const { DB_URI } = process.env

const learnerSchema = require('./../models/Learner')

const login = async (req, res) => {
    await mongoose.connect(DB_URI)
        .then(() => console.log("Connected to DB"))
        .catch(err => console.log(err))

    try {
        // Extract client's data from request body
        const { email, password } = req.body
        console.log(req.body);

        // Verify client's data
        if (email === '' || password === '') {
            console.log('error sent');
            return res.status(401).json({ success: false, message: 'Some fields are messing.' })
        }

        // Fetch data client's data from DB
        const learner = await learnerSchema.findOne({ email, verified: true })

        const match = await bcrypt.compare(password, learner.password)
        console.log('Password Match ? ', match);


        // Verify the password
        if (match) {
            // Perform JWT verification
            const token = jwt.sign({ id: learner._id, email, user: `${learner.fname} ${learner.lname}`}, 'skey', { expiresIn: '1h' })

            // Sending cookies to client
            return res.status(200).cookie('token', token, {
                maxAge: 60000 * 60,
                httpOnly: true,
                secure: true
            }).json({ success: true, message: 'Login successful...', email, user: `${learner.fname} ${learner.lname}`})
        } else {
            return res.status(401).json({ success: false, message: 'Login failed!' })
        }

    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: 'Opps! something went wrong, please try again.' })
    } finally {
        // mongoose.connection.close()
    }
}


module.exports = { login }