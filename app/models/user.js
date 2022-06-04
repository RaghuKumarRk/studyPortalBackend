const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true},
});

userSchema.method({
    saveData: async function() {
        return this.save();
    },
});
userSchema.static({
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

module.exports = mongoose.model("users", userSchema);