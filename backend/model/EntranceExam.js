const mongoose = require('mongoose');

// Define MongoDB schema for the EntranceExam collection

const EntranceExamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
    },
  ],
  CourseCategory: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'CourseCategory',
    },
  ],
  // Other exam-related fields can be added here.
});

// Create and export the EntranceExam model
const EntranceExam = mongoose.model('EntranceExam', EntranceExamSchema);

module.exports = EntranceExam;
