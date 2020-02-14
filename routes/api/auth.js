const express = require('express');
const router = express.Router();

// @route		api/auth 
// @desc 		Testing auth route
// @access 		Public 
router.get('/', (req, res) => res.send('Auth Route'));

module.exports = router;