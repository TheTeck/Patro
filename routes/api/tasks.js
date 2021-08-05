const express = require('express');
const router = express.Router();
const tasksCtrl = require('../../controllers/tasks');


/*---------- Public Routes ----------*/
router.post('/api/tasks/', tasksCtrl.create);
router.get('/api/users/:id/tasks', tasksCtrl.getAllForUser);
router.get('/api/tasks/:id', tasksCtrl.getOne);

/*---------- Protected Routes ----------*/


module.exports = router;