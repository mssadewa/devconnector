const express = require('express');
const router = express.Router();

// @route		api/profile 
// @desc 		Testing profile route
// @access 		Public 
router.get('/', (req, res) => res.send('Profiles Route'));

module.exports = router;