const Shop = require('../../model/shopSchema');

module.exports.getAllExpense = (req, res) => {
  Shop.find().then(result => {
    res.send({data: result});
  }).catch(err => res.send(err));
};

module.exports.createNewExpense = (req, res) => {
  const body = req.body;

  if (body.hasOwnProperty('titleExpense')) {
    const shop = new Shop(body);
    shop.save().then(result => {
      res.send(result);
    }).catch(err => res.send(err));
  };
};