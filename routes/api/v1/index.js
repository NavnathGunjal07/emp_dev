const express = require('express');

const router = express.Router();

router.use('/behaviors', require('./behavior'));

module.exports = router;