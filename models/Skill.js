const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
  name: String,
  level: String,
});

module.exports = mongoose.model('Skill', SkillSchema);
