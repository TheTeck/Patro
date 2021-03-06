const express = require('express');
const router = express.Router();
const invitesCtrl = require('../../controllers/invites');


/*---------- Public Routes ----------*/
router.post('/api/users/:id/invites/', invitesCtrl.create);
router.delete('/api/users/:id/invites/:inviteId', invitesCtrl.deleteInvite);
/*---------- Protected Routes ----------*/


module.exports = router;