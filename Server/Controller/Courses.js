const coursesSchema = require("../models/Courses")


const getCourses = async (req,res)=>{ 

    try {
        const courses = await coursesSchema.find()
        res.send(courses)

    }
    catch(err) {
        console.log(err)
    }
}


const createCourses = async (req,res) => {

    try{
        console.log("asdasd",req.body)
        const courses =await coursesSchema.create (
            req.body,            
        )
        console.log("course is created",courses)
        res.status(200).send(courses)
        

    }
    catch (err) {
        console.log(err)
        res.status(500).send(err)

    }
}

module.exports = {
    getCourses,
    createCourses,
}