const Result = require('../models/colorblindnessModel');

// controllers/results.js

const addResult = async (req, res) => {
  const { questionId, answer } = req.body;

  if (!questionId || !answer) {
    return res.status(400).json({ error: 'Both questionId and answer are required.' });
  }

  try {
    const newResult = new Result({
      questionId,
      answer,
    });

    await newResult.save();

    return res.status(201).json(newResult);
  } catch (error) {
    console.error('Error adding result:', error);
    return res.status(500).json({ error: 'Failed to add result' });
  }
};

  

// Controller to get results of the first test
const getFirstTestResults = async (req, res) => {
    try {
      const firstTestResults = await Result.find({ questionId: 1 }); // Assuming questionId 1 is for the first test
      return res.status(200).json(firstTestResults);
    } catch (error) {
      console.error('Error getting first test results:', error);
      return res.status(500).json({ error: 'Failed to get first test results' });
    }
  };
  
  module.exports = {
    addResult,
    getFirstTestResults, // Export the new function
  };