const mongoose = require('mongoose')
require('dotenv').config()

const {QuestionSetModel} = require('../models/Question')

const getQuestions = async(req, res) => {
    console.log('A request has been received in exam router');

    const {category,level} = req.body

    console.log(req.body);

    await mongoose.connect(process.env.DB_URI)
        .then(() => console.log('Ready to fetch questions'))
        .catch(() => console.log('The is an error in DB connection'))

    try {
        const qset = await QuestionSetModel.findOne({paperName: category, level})
        return res.status(200).json(qset)
    } catch(err) {
        console.error(err)
        return res.status(501).json({error:'Error occur'})
    } finally {
        
    }
}

module.exports = {getQuestions}