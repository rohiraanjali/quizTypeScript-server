const Categories = require("../models/category.models");

const getQuestions = async(req,res) => {
    try {
        const questions = await Categories.find({}).lean();
        if(questions){
           return res.status(200).json({quiz:questions})
        }
        res.status(404).json({ success:false,message:"Quiz not found"})
    } catch (error) {
        res.status(404).json({ success:false,message:"Quiz not found"})
    } 
}


module.exports = {getQuestions};