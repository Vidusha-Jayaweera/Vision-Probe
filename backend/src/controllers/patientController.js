const Patient = require('../models/patientModel');
const { validationResult } = require('express-validator');

const patientregister =  async (req, res) => {
    try {
      const { name, email, password } = req.body;

      // Check if the email already exists
      const existingUser = await Patient.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }

      // Create a new user
      const user = new Patient({ name, email, password });
      await user.save();

      res.status(201).json({ message: 'Registration successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Registration failed' });
    }
  };

const loginUser = async (req, res) => {
    const errors = validationResult(req);
  
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    const { email, password } = req.body;
  
    try {
      // Implement your user authentication logic here
      const user = await Patient.findOne({ email });
  
      if (!user || user.password !== password) {
        return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
      }
  
      // Create a session and store user ID and email
      req.session.user = { id: user.id, email: user.email };
  
      res.json({ user: { id: user.id, email: user.email } });
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  };
  
  // Handle user logout
  const logoutUser = (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ msg: 'Logout failed' });
      }
  
      res.clearCookie('connect.sid'); // Clear the session cookie
      res.json({ msg: 'Logout successful' });
    });
  };

  const getUserByEmail = async (req, res) => {
    try {
      const { email } = req.query;
  
      const user = await Patient.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Return user data
      res.status(200).json(user);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
module.exports ={ patientregister , loginUser , logoutUser , getUserByEmail };
