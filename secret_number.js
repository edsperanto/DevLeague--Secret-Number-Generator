'use strict';
module.exports = function() {
  var _rand = Math.floor(Math.random() * 1000001);

  function secretNumber() {
    return  _rand;
  }

  return secretNumber;
};