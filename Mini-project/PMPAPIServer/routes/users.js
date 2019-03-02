var express = require('express');
var router = express.Router();

var usercontroller = require('../controllers/usercontroller');

// Enabling CORS
router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

router.post('/authenticate', usercontroller.authenticate);
router.post('/register', usercontroller.register);
router.get('/', usercontroller.getAll);
router.get('/current', usercontroller.getCurrent);
router.get('/:id', usercontroller.getById);
router.put('/:id', usercontroller.update);

module.exports = router;