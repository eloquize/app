const router = require('express').Router();
const controllers = require('../controllers');

router.get('/', controllers.test.get);

module.exports = router;
