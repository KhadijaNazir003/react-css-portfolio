const mongoose = require('mongoose');

const EducationSchema = new mongoose.Schema({
  degree: String,
  institution: String,
  startYear: Number,
  endYear: Number,
});

module.exports = mongoose.model('Education', EducationSchema);
