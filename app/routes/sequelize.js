var express = require('express');
var Sequelize = require('sequelize');
var router = express.Router();

var sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host   : process.env.DB_SERVICE,
    dialect: 'postgres',
    pool   : {
        max : 5,
        min : 0,
        idle: 10000
    }
});

var Company = sequelize.define('Company', {
    name: Sequelize.STRING
});


// Applying middleware to all routes in the router
router.use(function (req, res, next) {
    console.log("estoy en sequelize");
    next()
});


/* GET users listing. */
router.get('/', function (req, res, next) {
    sequelize.sync()
        .then(function () {
            return Company.findAll()
                .then(function (companies) {
                    res.json(companies);
                });
        });
});

/* GET users listing. */
router.post('/', function (req, res, next) {
    sequelize.sync()
        .then(function () {
            return Company.create({
                    name: 'Buscaparking Inc'
                })
                .then(function (company) {
                    console.log(company.get({
                        plain: true
                    }))
                });
        });
});

module.exports = router;
