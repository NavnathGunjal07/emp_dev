const express = require('express');

const router = express.Router();

//including v1 in index route of api
router.use('/v1', require('./v1'));

module.exports = router;