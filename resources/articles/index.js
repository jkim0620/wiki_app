const express = require("express");
const router = express.Router();
const controller = require('./controller.js');
const views = require('./viewsController');

router.get('/new', controller.indexNew);


router.get('/', controller.index);
router.post('/', controller.create);

module.exports = router;
