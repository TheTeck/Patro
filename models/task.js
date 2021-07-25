const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    // recipients are all users who recieve this task
    recipients: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    description: {
        type: String,
        required: true,
        default: ''
    },
    // priority is 1-5, lowest to highest
    priority: {
        type: Number,
        required: true,
        default: 1
    },
    deadline: {
        type: Date,
        default: null
    },
    complete: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Task', taskSchema);