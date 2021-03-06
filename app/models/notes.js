const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
    tittle: { type: String, required: true},
    description: { type: String, default:"", required: true},
    referenceLinks: { type: String, default:""},
});

notesSchema.method({
    saveData: async function() {
        return this.save();
    },
});
notesSchema.static({
    findData: function(findObj) {
        return this.find(findObj);
    },
    findOneData: function(findObj) {
        return this.findOne(findObj);
    },
    findOneAndUpdateData: function(findObj, updateObj) {
        return this.findOneAndUpdate(findObj, updateObj, {
            upsert: true,
            new: true,
            setDefaultsOnInsert: true,
        });
    },
    findDataWithAggregate: function(findObj) {
        return this.aggregate(findObj);
    },
    getDocuments: function(requestData, selectionKeys, offset, limit, sortingKey) {
        return this.find(requestData, selectionKeys).sort(sortingKey).skip(parseInt(offset)).limit(parseInt(limit)).exec();
    },
    countData: function(findObj) {
        return this.count(findObj);
    },

});

module.exports = mongoose.model("notes", notesSchema);