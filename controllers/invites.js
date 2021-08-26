const User = require('../models/user');

module.exports = {
    create,
};

async function create (req, res) {
    try {
        const thisUser = await User.findById(req.params.id);
        const thatUser = await User.findById(req.body.invited);
        thisUser.invited.push(req.body.invited);
        thatUser.invitesFrom.push(req.params.id);
        thisUser.save();
        thatUser.save();
        console.log(thisUser, thatUser)
        res.json({ data: thatUser._id })
    } catch (error) {
        res.json({ data: error });
    }
};