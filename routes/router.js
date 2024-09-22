const express = require('express');
const router = express.Router();
const kmy = require('../controller/KmyController');


router.get('/', kmy.index);
router.get('/personalinfo', kmy.personalinfo);
router.get('/social', kmy.social);
router.get('/gameinfo', kmy.gameinfo);
router.get('/special', kmy.special);

module.exports = router;