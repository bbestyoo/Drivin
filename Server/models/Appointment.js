const mongoose = require("mongoose");

const schema = mongoose.Schema;
const ObjectId = schema.ObjectId;


const appointModel = new schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  
  courses_type: {
    type: String,
    required: true,
    set: function (value) {
      return value.toLowerCase();
    },
    enum: ["beginner", "intermediate", "pro",],
  },
  car_type: {
    type: String,
    required: true,
    set: function (value) {
      return value.toLowerCase();
    },
    enum: ["family", "suv", "sports",],
  },
  message: {
    type: String,
    required: true,
  },
  client :{
    ref: "users",
    type: ObjectId,
  }
});

const appSchema = mongoose.model("appointments", appointModel);
module.exports = appSchema;
