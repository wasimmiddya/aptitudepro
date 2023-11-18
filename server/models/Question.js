const mongoose = require('mongoose')

const {Schema, model} = mongoose

const QuestionSetSchema = Schema({
    paperCode: {
        type: String,
        unique: true
    },
    paperName: String,
    questionSet: [{
        _id: false,
        questionNo: Number,
        questionBody: String,
        options: Object,
        selected: {
            type: String,
            default: ''
        },
        answere: String,
        belongsTo: String,
        marks: Number
    }],
    level: String,
    totalQuestions: Number
})

const QuestionSetModel = model('questionset', QuestionSetSchema)

module.exports = {QuestionSetModel}