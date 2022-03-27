const express = require('express');
const router = express.Router();


//including api routes in index routes of router
router.use('/api', require('./api'));


module.exports = router;