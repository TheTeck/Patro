const User = require('../models/user');

module.exports = {
    getOne
};

async function getOne (req, res) {
    try {       
        const connection = await User.find({ _id: req.params.id });
        res.status(200).json({ connection });
    } catch (err) {
        res.json({ data: err });
    }
}