const express = require('express');
const router = express.Router();

const {
  getAllExpense,
  createNewExpense,
  deleteExpense,
} = require('../controllers/shop.controller');


router.get('/allExpense', getAllExpense);
router.post('/createExpense', createNewExpense);
router.delete('/deleteExpense', deleteExpense);

module.exports = router;