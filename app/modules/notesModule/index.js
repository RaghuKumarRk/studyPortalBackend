const constants =  require('../../common/constants');
const { lhtLog } = require('../../utils');
const notesManager = require("./manager");
const Utils = require( '../../utils');

module.exports = class controller {
    async createNotes(req,res){
        lhtLog('Inside createNotes', req.body, 'createNotes', 0, '');
        const [error, createNotes] = await Utils.parseResponse(new notesManager().createNotes(req.body));
        if (!createNotes) return Utils.handleError(error, req, res)
        return Utils.response(res, createNotes, constants.apiSuccessMessage.NOTES_CREATE_SUCCESS, constants.httpConstants.RESPONSE_STATUS.SUCCESS, constants.httpConstants.RESPONSE_CODES.OK)
    }

    async getNotesList(req,res){
        lhtLog('Inside getNotesList', req.body, 'getNotesList', 0, '');
        const [error, getNotesList] = await Utils.parseResponse(new notesManager().getNotesList(req.body));
        if (!getNotesList) return Utils.handleError(error, req, res)
        return Utils.response(res, getNotesList, constants.apiSuccessMessage.FETCH_SUCCESS, constants.httpConstants.RESPONSE_STATUS.SUCCESS, constants.httpConstants.RESPONSE_CODES.OK)
    }

    async updateNotes(req,res){
        lhtLog('Inside updateNotes', req.body, 'updateNotes', 0, '');
        const [error, updateNotes] = await Utils.parseResponse(new notesManager().updateNotes(req.body));
        if (!updateNotes) return Utils.handleError(error, req, res)
        return Utils.response(res, updateNotes, constants.apiSuccessMessage.NOTES_UPDATE_SUCCESS, constants.httpConstants.RESPONSE_STATUS.SUCCESS, constants.httpConstants.RESPONSE_CODES.OK)
    }

    async deleteNotes(req,res){
        lhtLog('Inside deleteNotes', req.body, 'deleteNotes', 0, '');
        const [error, deleteNotes] = await Utils.parseResponse(new notesManager().deleteNotes(req.body));
        if (!deleteNotes) return Utils.handleError(error, req, res)
        return Utils.response(res, deleteNotes, constants.apiSuccessMessage.NOTES_DELETE_SUCCESS, constants.httpConstants.RESPONSE_STATUS.SUCCESS, constants.httpConstants.RESPONSE_CODES.OK)
    }

    async getNotesDetails(req,res){
        lhtLog('Inside getNotesDetails', req.body, 'getNotesDetails', 0, '');
        const [error, getNotesDetails] = await Utils.parseResponse(new notesManager().getNotesDetails(req.body));
        if (!getNotesDetails) return Utils.handleError(error, req, res)
        return Utils.response(res, getNotesDetails, constants.apiSuccessMessage.FETCH_SUCCESS, constants.httpConstants.RESPONSE_STATUS.SUCCESS, constants.httpConstants.RESPONSE_CODES.OK)
    }
}