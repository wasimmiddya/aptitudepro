const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Learner = require('./../models/Learner')


const saveUser = (req,res,next) => {

    /* Logic for hashing password */
    const hashPassword = async (plaintextPassword) => {
        const saltRounds = 10;
    
        try {
            const hashedPassword = await bcrypt.hash(plaintextPassword, saltRounds);
            return hashedPassword;
        } catch (error) {
            throw new Error('Error hashing password:', error);
        }
    }

}



const saveRecord = async (learner) => {
    let flag = false

    // Database connectivity logic
    await mongoose.connect(process.env.URI)
        .then(() => console.log('DB connected...'))
        .catch(error => console.error(error))

    /* Hashing the password */
    let password = await hashPassword()
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
        throw Error("Opps, something went wrong : "+error)
    } finally {
        await mongoose.connection.close()
    }

    return flag
}

module.exports = saveRecord