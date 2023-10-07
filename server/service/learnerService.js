const bcrypt = require('bcryptjs')
const nodemailer = require('nodemailer')

require('dotenv').config()
const {CLIENT_ID, CLIENT_SECRET,REFRESH_TOKEN,REDIRECT_URI} = process.env


const oAuth2Client = new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URI)
oAuth2Client.setCredentials({refresh_token: REFRESH_TOKEN})

/* Logic for hashing password */
const hashPassword = async (plaintextPassword) => {
    /**
     * @param plaintextPassword string
     * This pice of code will generate a hashed password
     * @returns hashed password
     */
    const saltRounds = 10;

    try {
        const hashedPassword = await bcrypt.hash(plaintextPassword, saltRounds);
        return hashedPassword;
    } catch (error) {
        throw new Error('Error hashing password:', error);
    }
}

// Generate OTP value
const generateOTP = () => {
    /**
     * @param void
     * This function is used to generate random otp between 1000 to 9999
     * It uses math funtion to generate random number.
     * @returns Number
     */
    return Math.floor(Math.random() * (10000-100) + 100)
}


// Send otp to the client's mail
const sendOTP = async ({email,otp}) => {

    const accessToken = await oAuth2Client.getAccessToken()

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAUTH2',
                user: 'aptitudepro23@gmail.com',
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken
            }
        })

    const mailContent = {
        from: EMAIL,
        to: email,
        subject: "Verification Code",
        html: `<h3>Your OTP number is :: <span style='color: #db2777; font-weight: 700;'>${otp}</span> </h3>`
    }

    const info = await transporter.sendMail(mailContent)

    console.log(info)
    
    if(info) return true
    else return false
}



module.exports = {hashPassword, generateOTP, sendOTP}