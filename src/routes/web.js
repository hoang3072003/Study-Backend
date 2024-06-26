const express = require('express');
const {getHomepage, postCreateUser,getCreatePage} = require('../controllers/homeController')
const router = express.Router();
router.get('/', getHomepage );

router.post('/create-user', postCreateUser);
router.get('/create',getCreatePage);

module.exports = router;