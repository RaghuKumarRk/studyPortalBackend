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
        lhtLog('Inside getUsers', req.body, 'getUsers', 0, '');
        const [error, getUsers] = await Utils.parseResponse(new userManager().getUsers(req.body));
        if (!getUsers) return Utils.handleError(error, req, res)
        return Utils.response(res, getUsers, constants.apiSuccessMessage.FETCH_SUCCESS, constants.httpConstants.RESPONSE_STATUS.SUCCESS, constants.httpConstants.RESPONSE_CODES.OK)
    }

    async updateUser(req,res){
        lhtLog('Inside updateUser', req.body, 'updateUser', 0, '');
        const [error, updateUser] = await Utils.parseResponse(new userManager().updateUser(req.body));
        if (!updateUser) return Utils.handleError(error, req, res)
        return Utils.response(res, updateUser, constants.apiSuccessMessage.UPDATE_SUCCESS, constants.httpConstants.RESPONSE_STATUS.SUCCESS, constants.httpConstants.RESPONSE_CODES.OK)
    }

    async deleteUser(req,res){
        lhtLog('Inside deleteUser', req.body, 'deleteUser', 0, '');
        const [error, deleteUser] = await Utils.parseResponse(new userManager().deleteUser(req.body));
        if (!deleteUser) return Utils.handleError(error, req, res)
        return Utils.response(res, deleteUser, constants.apiSuccessMessage.DELETE_SUCCESS, constants.httpConstants.RESPONSE_STATUS.SUCCESS, constants.httpConstants.RESPONSE_CODES.OK)
    }
}