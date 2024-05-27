
const userService = require('../services/userService')

const createUserDetails = async(req,res)=>{
    console.log(req.body)
    const userData = await userService.createUserDetails(req.body);
    res.send(userData)
}
module.exports = {
    createUserDetails
}