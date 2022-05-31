const isValidString = (str) => str === '' || typeof str !== 'string';

const isValidNumber = (num) => num === '' || typeof num !== 'number';

module.exports = {
  isValidString,
  isValidNumber
}