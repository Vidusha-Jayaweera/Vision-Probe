const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  questionId: {
    type: Number,
    required: true,
  },
  answer: {
    type: Number,
    required: true,
  },
});

const Result = mongoose.model('Result', resultSchema);

module.exports = Result;

