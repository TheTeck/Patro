const express = require('express');
const router = express.Router();
const connectionsCtrl = require('../../controllers/connections');


/*---------- Public Routes ----------*/
router.get('/api/connections/:id', connectionsCtrl.getOne);

/*---------- Protected Routes ----------*/


module.exports = router;