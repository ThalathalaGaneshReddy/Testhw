const mongoose = require("mongoose")

const locationSchema = new mongoose.Schema({
    name:String,
    lat:String,
    lon:String,
    state:String
})

mongoose.model("locations",locationSchema)
module.exports = mongoose.model("locations")