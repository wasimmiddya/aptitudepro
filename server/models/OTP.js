const {Schema,model} = require('mongoose')

const OTPSchema = new Schema({
    email: {
        type: String,
        require: true,
    },
    otp: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 60 * 2
    }
})

module.exports = model('Otp', OTPSchema)