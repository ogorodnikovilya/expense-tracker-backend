const Shop = require('../../model/shopSchema');

const getAllExpense = (req, res) => {
  try {
    Shop.find().then(result => {
      res.status(200).send({data: result});
    })
  } catch (error) {
    res.status(404).send({message: 'Fail in get all Expenses'});
  }
};

const createNewExpense = (req, res) => {
  try {
    const { titleExpense, cost } = req.body;
    if (titleExpense === '' || typeof titleExpense !== 'string' || cost === '' || typeof cost !== 'string') {
      throw new Error();
    };
      const shop = new Shop(req.body);
      shop.save().then(result => {
        res.status(200).send(result);
      })
  } catch (error) {
    res.status(404).send(error.message);
  }
};

const changeExpenseInfo = (req, res) => {
  try {
    const { _id, titleExpense, date, cost } = req.body;
    if (!_id || titleExpense === '' || typeof titleExpense !== 'string' || date === "" || typeof date !== 'string' || cost === '' || typeof cost !== 'string') {
      throw new Error();
    };
    
    Shop.findOneAndUpdate(
      { _id: _id },
      { $set: req.body },
      { new: true }
    ).then(() => { 
      Shop.find().then(result => {          
        res.status(200).send(result);                 
      }).catch(() => {
        res.status(404).send({message: 'Fail in change Expense'});
      });   
    });
  } catch (error) {
    res.status(404).send({message: 'Fail in change Expense'});
  }
};

const deleteExpense = (req, res) => {
  try {
    const id = req.query.id;
    Shop.deleteOne({ _id: id }).then((result) => {          
      res.status(200).send(result);                 
    });
  } catch (error) {
    res.status(404).send({message: 'Fail in delete Expense'});
  }
};

module.exports = {
  getAllExpense,
  createNewExpense,
  changeExpenseInfo,
  deleteExpense
};