const express = require('express');
const router = express.Router();

const {
  getAllExpense,
  createNewExpense,
} = require('../controllers/task.controller');


router.get('/allExpense', getAllExpense);
router.post('/createExpense', createNewExpense);

module.exports = router;