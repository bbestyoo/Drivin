const userSchema = require("../models/Users")
const getUsers = async (req, res) => {
  try {
    console.log("gret user")
    const myuser = await userSchema.find({role: "agents"})
    res.send(myuser)
    console.log(myuser)

    
    
    // console.log({ userYetaXa: myuser });
    // res.status(200).send(myuser);
  } catch (err) {
    res.send(err)
    console.log(err)
    // next(err);x
  }
};

const getUser = async (req, res) => {
  try {
    console.log("gret user")
    console.log("gret user..",req.user)

    const myuser = await userSchema.findById(req.user.user._id, {
      password: 0,
      repeat_password: 0,
    });
    console.log({ userYetaXa: myuser });
    res.status(200).send(myuser);
  } catch (err) {
    res.send(err)
    console.log(err)

    // next(err);
  }
};


module.exports = {
  getUsers,
  getUser
};
