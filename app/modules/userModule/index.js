const constants =  require('../../common/constants');
const userManager = require("./manager");
const Utils = require( '../../utils');
const { lhtLog } = require('../../utils');

module.exports = class controller {
    async createUser(req,res){
        lhtLog('Inside createUser', req.body, 'createUser', 0, '');
        const [error, createUser] = await Utils.parseResponse(new userManager().createUser(req.body));
        if (!createUser) return Utils.handleError(error, req, res)
        return Utils.response(res, createUser, constants.apiSuccessMessage.CREATE_SUCCESS, constants.httpConstants.RESPONSE_STATUS.SUCCESS, constants.httpConstants.RESPONSE_CODES.OK)
    }

    async getUsers(req,res){
        const [error, getUsers] = await Utils.parseResponse(new userManager().getUsers(req.body));
        if (!getUsers) return Utils.handleError(error, req, res)
        return Utils.response(res, getUsers, constants.apiSuccessMessage.FETCH_SUCCESS, constants.httpConstants.RESPONSE_STATUS.SUCCESS, constants.httpConstants.RESPONSE_CODES.OK)
    }

    // async updateUser(req,res){
    //     const [error, updateUser] = await Utils.parseResponse(new userManager().updateUser(req.body));
    //     if (!updateUser) return Utils.handleError(error, req, res)
    //     return Utils.response(res, updateUser, constants.apiSuccessMessage.UPDATE_SUCCESS, constants.httpConstants.RESPONSE_STATUS.SUCCESS, constants.httpConstants.RESPONSE_CODES.OK)
    // }
}