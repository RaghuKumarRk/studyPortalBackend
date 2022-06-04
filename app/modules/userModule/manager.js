const userModel = require('../../models/user');
const Utils = require('../../utils');
const constants = require('../../common/constants')

module.exports = class Manager {
    createUser = async(requestData) =>{
        console.log(requestData);
        const user = new userModel(requestData);
        await user.save();
        if(!user) return Utils.error({},'unable To Create user',constants.httpConstants.RESPONSE_CODES.BAD_REQUEST);
        return user;
    }

    getUsers = async () =>{
        const users = await userModel.find()
        if(!users) return Utils.error({},'unable To get Users',constants.httpConstants.RESPONSE_CODES.BAD_REQUEST)
        return users;
    }

    // updateUser = async (requestData) =>{
    //     let updateUser = await userModel.findOneAndUpdate({_id:requestData.id}, requestData);
    //     return updateUser;
    // }
}