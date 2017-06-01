const express = require("express");
const router = express.Router();
const controller = require('./controller.js');
const views = require('./viewsController');

router.get('/', controller.index);

module.exports = router;
