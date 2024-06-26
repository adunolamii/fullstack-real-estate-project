const express = require("express")
const mongoose = require("mongoose")
const adminPropBModel = require ("./Models/adminPropB")
const dotenv = require("dotenv").config()
const cors = require("cors")
const app = express()

// MIDDLE WARE
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

// HOME PAGE
app.get("/", (req, res) => {
    res.send("<h1>OUR home page<h1>");
  });


// CREATE
app.post("/adminPropBs", async(req, res)=>{
    try {
       const adminPropB = await adminPropBModel.create(req.body)
       res.status(200).json(adminPropB)
    } catch (error) {
        res.status(500).json({error})
    }
})

// READ ALL
// app.get("/adminPropBs", async(req, res)=>{
//     try {
//        const adminPropB = await adminPropBModel.find(req.body)
//        res.status(200).json(adminPropB)
//     } catch (error) {
//         res.status(500).json({error})
//     }
// })
// READ SINGLE
// app.get(`/adminPropB/:id`, async(req, res)=>{
//   const {id} = req.params
//     try {
//         const adminPropB = await adminPropBModel.findById(id)
//         res.status(200).json(adminPropB)
//     } catch (error) {
//         res.status(500).json(error)
//     }
// })





//connect to mongoDB
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
   console.log("connected successfully")
})


 .catch((error)=>{
     console.log((error))
 })


app.listen(7001, ()=>{
    console.log("listening");
})