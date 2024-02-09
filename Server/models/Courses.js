const mongoose = require("mongoose")
const schema = mongoose.Schema;

const coursesModel = new schema ({

    price:{
        type:Number,
        required:true
    },
    title: {
        type:String,
        required: true,
    },
    description: {
        type:String,
        required: true,
    },
    level: {
        type:String,
        required: true,
    },
    duration: {
        type:String,
        required: true,
    },
    image: {
        type: String,
    },



})


const coursesSchema = mongoose.model("courses",coursesModel)
module.exports = coursesSchema