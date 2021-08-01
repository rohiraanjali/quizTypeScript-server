const mongoose = require("mongoose");

const OptionSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    isRight: {
        type: Boolean,
        required: true
    }
})

const QuestionSchema = new mongoose.Schema({
    question: {
        type: String, 
        required: true,
        true: true
    },
    options: [OptionSchema]
})
const CategorySchema = new mongoose.Schema({
    quizName: {
        type: String,
        required: true, 
        trim: true
    },
    questions: [QuestionSchema]
},{timestamps:true})

module.exports = mongoose.model("Category", CategorySchema)