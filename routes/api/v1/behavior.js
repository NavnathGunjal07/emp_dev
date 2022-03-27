const express = require('express');

const router = express.Router();
const behaviorsApi = require("../../../controllers/api/v1/behaviors");

//routes for listing down all behaviors in home page
router.get('/', behaviorsApi.index);
//routes for deleting specific behavior improvement by id
router.delete('/:behaviorId/delete/:improvementId', behaviorsApi.delete);
//routes for adding new improvement behavior
router.post('/:id/addImprovement', behaviorsApi.improve);
//routes for updating behavior
router.put('/:behaviorId/updateImprovement/:improvementId', behaviorsApi.update);



module.exports = router;