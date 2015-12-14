var models = require('../models');

exports.find = function (req, res, next) {
    models.Company
        .findAll()
        .then(function (companies) {
            if (typeof companies != 'undefined' && companies) {
                res.status(200).send({
                    companies: companies
                });
            } else {
                res.status(404).send({
                    message    : 'Companies Not Found',
                    description: 'Companies Not Found',
                    code       : 'companies_not_found'
                });
            }
        })
        .catch(function (reason) {
            res.status(500).send({
                message    : reason.message,
                description: reason.original.sql,
                code       : reason.name
            });
        });
};

exports.findOne = function (req, res, next) {
    models.Company
        .findById(req.params.id)
        .then(function (company) {
            if (typeof company != 'undefined' && company) {
                res.status(200).send({
                    companies: company
                });
            } else {
                res.status(404).send({
                    message    : 'Company Not Found',
                    description: 'Company Not Found',
                    code       : 'company_not_found'
                });
            }
        })
        .catch(function (reason) {
            res.status(500).send({
                message    : reason.message,
                description: reason.original.sql,
                code       : reason.name
            });
        });
};

exports.create = function (req, res, next) {
    models.Company
        .create({name: req.body.name})
        .then(function (company) {
            res.json({
                message: 'Cree una neuva compañia',
                company: company
            });
        })
        .catch(function (reason) {
            res.status(500).send({
                message    : reason.message,
                description: reason.original.sql,
                code       : reason.name
            });
        });
};

exports.update = function (req, res, next) {

};

exports.destroy = function (req, res, next) {

};

exports.populate = function (req, res, next) {

};

exports.add = function (req, res, next) {

};

exports.remove = function (req, res, next) {

};

/**
 * Company
 */

exports.find_parking = function (req, res, next) {
    models.Parking
        .findAll({
            where: {CompanyId: req.params.id}
        })
        .then(function (parkings) {
            if (typeof parkings != 'undefined' && parkings) {
                res.status(200).send({
                    companies: parkings
                });
            } else {
                res.status(404).send({
                    message    : 'Companies Not Found',
                    description: 'Companies Not Found',
                    code       : 'companies_not_found'
                });
            }
        })
        .catch(function (reason) {
            res.status(500).send({
                message    : reason.message,
                description: reason.original.sql,
                code       : reason.name
            });
        });
};

exports.findOne_parking = function (req, res, next) {
    models.Parking
        .findById(req.params.id)
        .then(function (parking) {
            if (typeof parking != 'undefined' && parking) {
                res.status(200).send({
                    companies: parking
                });
            } else {
                res.status(404).send({
                    message    : 'Parking Not Found',
                    description: 'Parking Not Found',
                    code       : 'parking_not_found'
                });
            }
        })
        .catch(function (reason) {
            res.status(500).send({
                message    : reason.message,
                description: reason.original.sql,
                code       : reason.name
            });
        });
};

exports.create_parking = function (req, res, next) {
    models.Parking
        .create({
            name     : req.body.name,
            CompanyId: req.params.id
        })
        .then(function (parking) {
            res.status(200).send({
                message: "Cree un parking",
                parking: parking
            });
        })
        .catch(function (reason) {
            res.status(500).send({
                message    : reason.message,
                description: reason.original.sql,
                code       : reason.name
            });
        });
};

exports.update_parking = function (req, res, next) {

};

exports.destroy_parking = function (req, res, next) {

};
