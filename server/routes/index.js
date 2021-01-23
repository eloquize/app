const router = require('express').Router();
const testRouter = require('./test.js');

router.use('/test', testRouter);

module.exports = router;
