const express = require('express');
const router = express.Router();
const {
  getAllEducation,
  getEducationById,
  createEducation,
  updateEducation,
  deleteEducation,
} = require('../controllers/educationController');

router.get('/', getAllEducation);
router.get('/:id', getEducationById);
router.post('/', createEducation);
router.put('/:id', updateEducation);
router.delete('/:id', deleteEducation);

module.exports = router;
