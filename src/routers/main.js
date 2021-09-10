const router = require('express').Router();
const path = require('path');
const { home } =require('../controllers/mainController')


router.get('/', home );

module.exports = router