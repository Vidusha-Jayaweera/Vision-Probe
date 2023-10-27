const express = require('express');
const router = express.Router();
const { addResult, getFirstTestResults } = require('../controllers/colorblindnessController');


router.post('/add', addResult);
router.get('/get',getFirstTestResults);

module.exports = router;
