const express = require("express");
const router = express.Router();
const controller = require('./controller.js');
const views = require('./viewsController');

router.get('/new', controller.indexNew);

// router.route('/all')
//   .get(controller.showAll)
//   .post(controller.create);

router.route('/:id')
  .get(controller.show)
  .put(controller.showUpdate)
  .delete(controller.destroy);

router.route('/')
  .get(controller.index)
  .post(controller.create);

module.exports = router;
