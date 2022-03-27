const mongoose = require('mongoose');

//creating schema for storing Behaviors
const BehaviorSchema = new mongoose.Schema({
    behaviorTitle: {
        type: String,
        required: true
    },
    BehaviorList:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'BehaviorList'
    }],
},{
    timestamps: true
});

const Behavior = mongoose.model('Behavior', BehaviorSchema);
module.exports = Behavior;