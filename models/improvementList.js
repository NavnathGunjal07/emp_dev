const mongoose = require('mongoose');

//creating schema for storing Behavior List
const BehaviorListSchema = new mongoose.Schema({
    behaviorTitle: {
        type: String,
        required: true
    },
    behaviorImprove: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

const BehaviorList = mongoose.model('BehaviorList', BehaviorListSchema);
module.exports = BehaviorList;