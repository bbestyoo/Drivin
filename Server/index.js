const express = require("express")
const cors = require("cors")
const upload = require("./multer/multer")

const {createCourses,getCourses} = require("./Controller/Courses")
const app = express()
const mongoose = require("mongoose")
const Signup = require("./Controller/Signup")
const Login = require("./Controller/Login")
const { createAppointment, appointment } = require("./Controller/Appointments")
const auth = require("./middleware/auth")
const getUser = require("./Controller/User")
app.use(express.json())
app.use(cors())



mongoose.connect("mongodb://127.0.0.1:27017/drivin")
.then(()=> console.log("connected to db..."))
.catch((err)=>console.log(err))


app.get("/api/getCourses",getCourses)
app.post("/api/createCourses",createCourses)
app.post("/api/Signup",upload.single('image'),Signup)
app.post("/api/Login",Login)
app.post("/api/createAppoints",auth,createAppointment)
app.get("/api/Appoints",appointment)
app.get("/api/users",getUser)

app.listen(8000, ()=> {
    console.log("at your service sir....")

})

app.get("/api/drivin", function(req,res){
    res.send("welcome boss")
})