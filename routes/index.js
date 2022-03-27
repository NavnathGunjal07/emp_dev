const express = require('express');
const router = express.Router();


const behaviorsApi = require("../controllers/api/v1/behaviors");

//including api routes in index routes of router
router.use('/api', require('./api'));
router.get('/',behaviorsApi.home);


module.exports = router;