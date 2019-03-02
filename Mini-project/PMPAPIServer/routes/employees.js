var express = require('express');
var router = express.Router();

var empcontroller = require('../controllers/empcontroller');

// Enabling CORS
router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

router.post('/add', empcontroller.add);
router.get('/', empcontroller.getAll);
router.get('/:id', empcontroller.getById);
router.put('/:id', empcontroller.update);

module.exports = router;