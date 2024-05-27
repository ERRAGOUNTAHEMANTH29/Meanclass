const userModel = require('../models/registerModel')

const createUserDetails = async(body)=>{
    const createData = await userModel.create(body)
    return createData;
}

module.exports = {
    createUserDetails
}