const Task = require('../models/task');
const User = require('../models/user');

module.exports = {
    create,
};

// Controller to create a new task. A task initially only
// has 1 recipient. Add 
async function create (req, res) {
    console.log(req.body, '<-- req.body')
    try {
        const task = await Task.create({
            creator: req.body.creator,
            recipient: req.body.recipient,
            description: req.body.description,
            priority: req.body.priority,
            complete: false
        });
        await task.save();

        const user = await User.findOne({ _id: req.body.creator });
        user.tasks.push(task);
        await user.save();

        if (req.body.creator !== req.body.recipient) {
            const user2 = await User.findOne({ _id: req.body.recipient });
            user2.tasks.push(task);
            await user2.save();
        }

        res.status(201).json({ task });
    } catch (err) {
        res.json({ data: err });
    }
}