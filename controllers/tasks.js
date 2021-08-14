const Task = require('../models/task');
const User = require('../models/user');

module.exports = {
    create,
    getAllForUser,
    getOne,
};

// Controller to create a new task. A task initially only
// has 1 recipient. Add task to task list for creator and
// the recipient even if they are the same user
async function create (req, res) {
    try {
        const task = await Task.create({
            creator: req.body.creator,
            recipients: [ req.body.recipient ],
            description: req.body.description,
            priority: req.body.priority,
            complete: false
        });
        await task.save();

        const user = await User.findOne({ _id: req.body.creator });
        user.tasks.push(task);
        await user.save();

        const recipient = await User.findOne({ _id: req.body.recipient });
        recipient.tasks.push(task);
        await recipient.save();

        res.status(201).json({ task });
    } catch (err) {
        res.json({ data: err });
    }
};

async function getAllForUser (req, res) {
    try {       
        const tasks = await Task.find({});
        console.log(tasks)
        const filteredTasks = tasks.filter(task => {
            return task.recipients.includes(req.params.id);
        });
        console.log(filteredTasks, "This is in the controller");
        res.status(200).json({ filteredTasks });
    } catch (err) {
        res.json({ data: err });
    }
};

async function getOne (req, res) {
    try {
        const task = await Task.findOne({ _id: req.params.id });
        res.status(200).json({ task });
    } catch (err) {
        res.json({ data: err });
    }
};