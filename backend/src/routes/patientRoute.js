const express = require('express');
const router = express.Router();
const {patientregister,loginUser,logoutUser , getUserByEmail} = require('../controllers/patientController');
const { check } = require('express-validator');

// patient registration route
router.post('/register', patientregister);

//patient login

router.post(
    '/login',
    [
      check('email', 'Please include a valid email').isEmail(),
      check('password', 'Password is required').exists(),
    ],
    loginUser
  );
  
  // User logout route
  router.get('/logout', logoutUser);

//get userdata
router.get('/user', getUserByEmail);


module.exports = router;
