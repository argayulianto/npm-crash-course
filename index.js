const _ = require('lodash');

let number = [23, 54, 67, 90, 3, 70];

_.each(number, function(number, i) {
    console.log(number);
})