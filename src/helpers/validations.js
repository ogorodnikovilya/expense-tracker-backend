const isValidString = (str) => typeof str !== 'string' || str === '';

const isValidNumber = (num) => typeof num !== 'number';

module.exports = {
  isValidString,
  isValidNumber
}