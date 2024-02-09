const express = require("express")
// const getCourses = require("./Controller/Courses")
const {createCourses,getCourses} = require("./Controller/Courses")
const app = express()
const mongoose = require("mongoose")
app.use(express.json())



mongoose.connect("mongodb://127.0.0.1:27017/drivin")
.then(()=> console.log("connected to db..."))
.catch((err)=>console.log(err))


app.get("/api/getCourses",getCourses)
app.post("/api/createCourses",createCourses)

app.listen(8000, ()=> {
    console.log("at your service sir....")

})

app.get("/api/drivin", function(req,res){
    res.send("welcome boss")
})