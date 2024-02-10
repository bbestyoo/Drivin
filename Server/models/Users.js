const mongoose = require("mongoose")
const schema = mongoose.Schema

const userModel = new schema ({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    repeat_password: {
        type: String,
        required: true
    },
    role :{
        type: String,
        enum: ["clients", "agents"],
        default: "clients"
        
    },
    image: {
        type: String,
    }

})




const userSchema = mongoose.model("users",userModel)
module.exports = userSchema;
  
