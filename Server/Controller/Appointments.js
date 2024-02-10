const appSchema = require("../models/Appointment")

const appointment = async (req,res)=>{ 

    try {
        const appointments = await appSchema.find()
        res.send(appointments)

    }
    catch(err) {
        console.log(err)
    }
}


const createAppointment = async (req,res) => {

    try{
        console.log("asdasd",req.body)
        console.log("user",req.user)
        const appointment =await appSchema.create ({
            ...req.body,  
            client: req.user.user._id,

    })
        console.log("course is created",appointment)
        res.status(200).send(appointment)
        

    }
    catch (err) {
        console.log(err)
        res.status(500).send(err)

    }
}

module.exports = {
    appointment,
    createAppointment,
}