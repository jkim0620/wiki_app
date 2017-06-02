const express = require("express");
const router = express.Router();
const controller = require('./controller.js');
const views = require('./viewsController');

router.get('/new', controller.indexNew);

router.get('/:id', controller.show);

router.route('/:id/edit')
  .get(controller.update)
  .put(controller.showUpdate);

router.route('/')
  .get(controller.index)
  .post(controller.create);


module.exports = router;
