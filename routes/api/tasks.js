const express = require('express');
const router = express.Router();
const tasksCtrl = require('../../controllers/tasks');


/*---------- Public Routes ----------*/
router.post('/', tasksCtrl.create);

/*---------- Protected Routes ----------*/


module.exports = router;