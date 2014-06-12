/**
 * Test 03
 */
var fs = require('fs');

var person = function(name) {
  var vorname = name || 'Default';

  return {
    'vorname': vorname,
    name: function() {
      return vorname + '_' + vorname;
    }
  };
};

var p1 = person();
console.log(p1, p1.name());

var p2 = person('Texas');
console.log(p2, p2.name());