const express = require("express")
const connectToMongo = require("./db.js")
const question = require("./models/wp/questions.js");
const wpMquestion = require("./models/wp/wpMquestions.js"); 
const wpHquestion = require("./models/wp/wpHquestions.js"); 
var cors = require('cors')
const app = express()

app.use(cors())
connectToMongo();

app.use(express.json())

//WP EASY QUESTIONS
app.post("/question",async (req,res)=>{
    try {
        let Question = await question.create(req.body)
        res.send(Question)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message:error.message})
    }
})

app.get("/getquestion",async (req,res)=>{
    try {
        let Question = await question.find({})
        res.send(Question)
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message:error.message})
    }
})

//WP MODERATE QUESTIONS
app.post("/wpMquestion",async (req,res)=>{
    try {
        let Question = await wpMquestion.create(req.body)
        res.send(Question)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message:error.message})
    }
})

app.get("/getwpMquestion",async (req,res)=>{
    try {
        let Question = await wpMquestion.find({})
        res.send(Question)
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message:error.message})
    }
})

//WP Hard QUESTIONS
app.post("/wpHquestion",async (req,res)=>{
    try {
        let Question = await wpHquestion.create(req.body)
        res.send(Question)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message:error.message})
    }
})

app.get("/getwpHquestion",async (req,res)=>{
    try {
        let Question = await wpHquestion.find({})
        res.send(Question)
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message:error.message})
    }
})

app.get("/",(req,res)=>{
    res.send("Hello from backend Karma , This Project is single handedly Done by Karma")
})

app.listen(3000,()=>{
    console.log("Backend is running on port 3000")
})