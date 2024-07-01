const express = require("express")
const mongoose = require("mongoose")
const adminPropBModel = require ("./Models/adminPropB")
const adminPropMModel = require("./Models/adminPropM")
const adminPropVModel = require("./Models/adminPropV")
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




// CREATE adminPROPB
app.post("/adminPropBs", async(req, res)=>{
    try {
      const adminPropB = await adminPropBModel.create(req.body)
       res.status(200).json(adminPropB)
    } catch (error) {
        res.status(500).json({error})
    }
  })

  // READ adminPROPBBBBBBBBB
app.get("/adminPropBs", async(req, res)=>{
    try {
       const adminPropB = await adminPropBModel.find(req.body)
       res.status(200).json(adminPropB)
    } catch (error) {
        res.status(500).json({error})
    }
  })


// CREATE adminPROPMMMMMMM
app.post("/adminPropMs", async(req, res)=>{
    try {
      const adminPropM = await adminPropMModel.create(req.body)
       res.status(200).json(adminPropM)
    } catch (error) {
        res.status(500).json({error})
    }
  })

    // READ adminPROPMMMMMMMMMMMM
app.get("/adminPropMs", async(req, res)=>{
    try {
       const adminPropM = await adminPropMModel.find(req.body)
       res.status(200).json(adminPropM)
    } catch (error) {
        res.status(500).json({error})
    }
  })

  // CREATE adminPROPVVVVVVV
app.post("/adminPropVs", async(req, res)=>{
    try {
      const adminPropV = await adminPropVModel.create(req.body)
       res.status(200).json(adminPropV)
    } catch (error) {
        res.status(500).json({error})
    }
  })

    // READ adminPROPVVVVVVVVVVVV
app.get("/adminPropVs", async(req, res)=>{
    try {
       const adminPropV = await adminPropVModel.find(req.body)
       res.status(200).json(adminPropV)
    } catch (error) {
        res.status(500).json({error})
    }
  })


//connect to mongoDB
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
   console.log(" now connected successfully")
})


//  .catch((error)=>{
//      console.log((error))
//  })


app.listen(8001, ()=>{
    console.log("okay,,,listening");
})