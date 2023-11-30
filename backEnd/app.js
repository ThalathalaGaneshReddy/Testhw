const express = require("express")
const app = express();
const bodyParser = require("body-parser")
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()
const port = process.env.PORT
 

const db = require("./db")
const Location = require("./Controllers/locationSchema")
 

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
 

app.get("/locations",async (req,res)=>{ 
    let locationList = await Location.find({})
    res.send(locationList)
}) 

app.listen(port,(err)=>{
    if(err)throw err
    console.log("running on:",port)
})