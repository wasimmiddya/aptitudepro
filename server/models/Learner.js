const mongoose = require('mongoose')
const {Schema} = mongoose

const learnerShema = new Schema({
    fname: String,
    lname: String,
    email: String,
    password: String,
    created_on: Date
})

module.exports = mongoose.model('Learner', learnerShema)