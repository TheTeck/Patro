const User = require('../models/user');

module.exports = {
    create,
    deleteInvite,
};

async function create (req, res) {
    try {
        const thisUser = await User.findById(req.params.id);
        const thatUser = await User.findById(req.body.invited);
        thisUser.invited.push(req.body.invited);
        thatUser.invitesFrom.push(req.params.id);
        thisUser.save();
        thatUser.save();
        res.json({ data: thatUser._id })
    } catch (error) {
        res.json({ data: error });
    }
};

async function deleteInvite (req, res) {
    console.log("In the deleteInvite controller");
    try {
       const thisUser = await User.findById(req.params.id);
       const thatUser = await User.findById(req.params.inviteId);

        if (thisUser.invitesFrom.includes(req.params.inviteId)) {
            const index = thisUser.invitesFrom.indexOf(req.params.inviteId);
            thisUser.invitesFrom.splice(index, 1);
        }

        if (thatUser.invited.includes(req.params.id)) {
            const index = thatUser.invited.indexOf(req.params.id);
            thatUser.invited.splice(index, 1);
        }

       thisUser.save();
       thatUser.save(); 
       res.json({ data: thisUser.invitesFrom });
    } catch (error) {
        res.json({ data: error });
    }
}