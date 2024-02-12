const userSchema = require("../models/Users")
const getUser = async (req, res) => {
  try {
    console.log("gret user")
    const myuser = await userSchema.find({role: "agents"})
    res.send(myuser)
    console.log(myuser)

    
    
    // console.log({ userYetaXa: myuser });
    // res.status(200).send(myuser);
  } catch (err) {
    // next(err);x
  }
};

module.exports = getUser;
