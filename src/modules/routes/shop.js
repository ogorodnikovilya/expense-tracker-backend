const express = require('express');
const router = express.Router();

const {
  getAllExpense,
  createNewExpense,
  changeExpenseInfo,
  deleteExpense,
} = require('../controllers/shop');


router.get('/allExpense', getAllExpense);
router.post('/createExpense', createNewExpense);
router.patch('/changeExpense', changeExpenseInfo);
router.delete('/deleteExpense', deleteExpense);

module.exports = router;