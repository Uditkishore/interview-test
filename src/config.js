const mongoose = require("mongoose");


const ConnectDB = async ()=>{
    try {
     await mongoose.connect(`mongodb://localhost:27017/AndgateTesting`) 
     console.log("Connected to Database!!!")
    } catch (error) {
        return console.log("Mongo Error:", error.message)
    }
}


module.exports = ConnectDB;