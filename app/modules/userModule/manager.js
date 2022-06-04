const constants = require('../../common/constants');
const userModel = require('../../models/user');
const { response } = require('../../utils');
const Utils = require('../../utils');

module.exports = class Manager {
    createUser = async(requestData) =>{
        const user = new userModel(requestData);
        await user.save();
        if(!user) return Utils.returnRejection(constants.apiFailureMessage.CREATE_USER_FAIL, constants.httpConstants.RESPONSE_CODES.BAD_REQUEST);
        return user;
    }

    getUsers = async () =>{
        const usersList = await userModel.find()
        if(!usersList) return Utils.returnRejection(constants.apiFailureMessage.GET_USER_FAIL, constants.httpConstants.RESPONSE_CODES.BAD_REQUEST)
        return usersList;
    }

    updateUser = async (requestData) =>{
        return await userModel.findOneAndUpdate({_id:requestData.id}, requestData).then(()=>{
            return response;
        })
    }

    deleteUser = async(requestData)=>{
        return await userModel.findOneAndDelete({_id:requestData.id}).then(()=>{
            return response;
        })
    }
}