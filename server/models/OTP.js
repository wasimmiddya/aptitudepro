const {Schema,model} = require('mongoose')

const OTPSchema = new Schema({
    email: {
        type: String,
        require: true,
    },
    otp: {
        type: Number,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 60 * 3
    }
})

module.exports = model('Otp', OTPSchema)