const Task = require('../models/task');

module.exports = {
    create,
};

// Controller to create a new task. A task initially only
// has 1 recipient.
async function create (req, res) {
    try {
        const task = await Task.create({
            creator: req.body.creator,
            recipient: req.body.recipient,
            description: req.body.description,
            priority: req.body.priority,
            complete: false
        });
        res.status(201).json({ task });
    } catch (err) {
        res.json({ data: err });
    }
}