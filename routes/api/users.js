const express = require('express');
const router = express.Router();

// @route		api/users 
// @desc 		Testing users route
// @access 		Public 
router.get('/', (req, res) => res.send('User Route'));

module.exports = router;