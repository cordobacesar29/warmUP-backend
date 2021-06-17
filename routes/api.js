const router = require('express').Router();
const apiBlogPost = require('./api/apiBlogPost');
const apiCategories = require('./api/apiCategories');

router.use('/apiBlogPost', apiBlogPost);
router.use('/apiCategories', apiCategories);


module.exports = router;