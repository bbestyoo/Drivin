const appSchema = require("../models/Appointment")

const appointment = async (req,res)=>{ 

    try {
        console.log("app",req.user)
        const appointments = await appSchema.find({client: req.user.user._id})
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

const deleteAppointment = async (req, res) => {
    try {
      const apps = await appSchema.findById(req.params.id);
      console.log(apps);
  
      if (apps) {
        console.log();
  
        if (req.user.user._id !== apps.client.toString()) {
          return res.status(401).send({
            msg: "Acess denied. This job wasnt created by you",
          });
        } else {
          let deletedApps = await appSchema.findByIdAndDelete(req.params.id);
          return res.status(200).send({ deletedAppsDetails: deletedApps });
        }
      } else {
        res.status(400).send("No Appointments Found");
      }
    } catch (err) {
      console.log(err)
      res.send(err)
    }
  };

module.exports = {
    appointment,
    createAppointment,
    deleteAppointment,
}