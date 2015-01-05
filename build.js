// essential ES6 -> ES5 transpiling
// more visitors here: https://github.com/facebook/jstransform/tree/master/visitors

var jstransform = require('jstransform');
var fs = require('fs');
 
var visitors = [];
[
  require('jstransform/visitors/es6-arrow-function-visitors'),
  require('jstransform/visitors/es6-destructuring-visitors'),
  require('jstransform/visitors/es6-object-short-notation-visitors'),
].forEach(function(visitor) {
  visitors = visitors.concat(visitor.visitorList);
});
 
var es6maybe = fs.readFileSync(process.argv[2], 'utf8');
var es5 = jstransform.transform(visitors, es6maybe);
 
console.log(es5.code);
