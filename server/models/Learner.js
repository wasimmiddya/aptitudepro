const mongoose = require('mongoose')
const {Schema} = mongoose

const learnerShema = new Schema({
    fname: String,
    lname: String,
    email: String,
    password: String,
    verified: Boolean,
    createdAt: Date,
},
{
    versionKey: false
}
)

module.exports = mongoose.model('Learner', learnerShema)