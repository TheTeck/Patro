const express = require('express');
const router = express.Router();
const invitesCtrl = require('../../controllers/invites');


/*---------- Public Routes ----------*/
router.post('/api/users/:id/invites/', invitesCtrl.create);

/*---------- Protected Routes ----------*/


module.exports = router;