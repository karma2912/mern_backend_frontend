const mongoose = require("mongoose")
const questionSchema = mongoose.Schema(
    {
        Qid:{
            type:Number,
            required: true
        },
        Question:{
            type:String,
            required: true
        },
        Answers:{
            type:JSON,
           required:true
        },
        correct_answer:{
            type:String,
            required:true
        }
    }
)

const wpHquestion = mongoose.model("wpHquestion",questionSchema)

module.exports = wpHquestion