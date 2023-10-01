const bcrypt = require('bcryptjs')


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

// OTP verification logic
const verify = async () => {

}






module.exports = {hashPassword, verify}