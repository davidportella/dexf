var express = require('express'),
    router  = express.Router();

router.use('/sequelize', require('./sequelize'));
router.use('/users', require('./users'));
router.use('/companies', require('./companies'));

// Applying middleware to all routes in the router
router.use(function (req, res, next) {
    console.log("estoy en raiz");
    next();
});

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {title: 'Express with reload 2'});
});

router.get('/about', function (req, res) {
    res.send('Learn about us')
});

module.exports = router;
