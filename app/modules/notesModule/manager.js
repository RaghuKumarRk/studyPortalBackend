const constants = require('../../common/constants');
const notesModel = require('../../models/notes');
const { response } = require('../../utils');
const Utils = require('../../utils');

module.exports = class Manager {
    createNotes = async(requestData) =>{
        const notes = new notesModel(requestData);
        await notes.save();
        if(!notes) return Utils.returnRejection(constants.apiFailureMessage.CREATE_NOTES_FAIL, constants.httpConstants.RESPONSE_CODES.BAD_REQUEST);
        return notes;
    }

    getNotesList = async () =>{
        const notesList = await notesModel.find()
        if(!notesList) return Utils.returnRejection(constants.apiFailureMessage.GET_NOTES_FAIL, constants.httpConstants.RESPONSE_CODES.BAD_REQUEST)
        return notesList;
    }

    updateNotes = async (requestData) =>{
        return await notesModel.findOneAndUpdate({_id:requestData.id}, requestData).then(()=>{
            return response;
        })
    }

    deleteNotes = async(requestData)=>{
        return await notesModel.findOneAndDelete({_id:requestData.id}).then(()=>{
            return response;
        })
    }

    getNotesDetails = async(requestData)=>{
        const notesDetails =  await notesModel.findById({_id:requestData.id});
        if(!notesDetails) return Utils.returnRejection(constants.apiFailureMessage.FETCH_FAIL, constants.httpConstants.RESPONSE_CODES.BAD_REQUEST)
        return notesDetails;
    }
}