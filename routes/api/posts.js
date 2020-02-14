const express = require('express');
const router = express.Router();

// @route		api/posts 
// @desc 		Testing posts route
// @access 		Public 
router.get('/', (req, res) => res.send('Posts Route'));

module.exports = router;