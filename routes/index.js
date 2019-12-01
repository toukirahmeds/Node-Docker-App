var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;


const factorial = (n)=>{
  return n === 1? 1: ( n * factorial(n - 1));
};

module.exports.factorial = factorial;
