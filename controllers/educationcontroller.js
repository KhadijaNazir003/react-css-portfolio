const Education = require('../models/Education');

exports.getAllEducation = async (req, res) => {
  const data = await Education.find();
  res.json(data);
};

exports.getEducationById = async (req, res) => {
  const data = await Education.findById(req.params.id);
  res.json(data);
};

exports.createEducation = async (req, res) => {
  const newEdu = new Education(req.body);
  await newEdu.save();
  res.status(201).json(newEdu);
};

exports.updateEducation = async (req, res) => {
  const updated = await Education.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.deleteEducation = async (req, res) => {
  await Education.findByIdAndDelete(req.params.id);
  res.status(204).send();
};
