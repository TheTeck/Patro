const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    // user who gets this task
    recipient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    description: {
        type: String,
        required: true,
        default: ''
    },
    // priority {'none', 'low', 'medium', 'high', 'urgent'}
    priority: {
        type: String,
        required: true,
        default: 'none'
    },
    complete: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Task', taskSchema);