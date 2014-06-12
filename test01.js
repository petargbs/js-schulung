/**
 * Test 01
 */
var fs = require('fs')
  , path = require('path')

 var myPath = path.join(__dirname, 'foo');
 if (!fs.existsSync(myPath))
  fs.mkdirSync(myPath);


var newPath = path.join(myPath, 'demo.txt');
fs.writeFileSync(newPath, 'Hello World!');

fs.readFile(newPath, function(err, data) {
  console.log(data.toString());
  console.log('Read.');
});

console.log('Written.');

/*
    Exports
    */
module.exports = function() {
  return {

  };
};