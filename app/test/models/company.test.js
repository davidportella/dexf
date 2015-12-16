var expect = require('expect.js');

describe('models/company', function () {
    beforeEach(function () {
        this.Company = require('../../models').Company;
    });

    describe('create', function () {
        it('sucess creates a company', function () {
            return this.Company.create({name: 'buscaparking'}).bind(this)
                .then(function (company) {
                    return expect(company.name).to.equal('buscaparking');
                });
        });
        it('failed creates a company without name', function () {
            return this.Company.create({}).bind(this)
                .then(function (company) {
                    return expect(company.name).to.equal('without name');
                })
                .catch(function (error) {
                    return !!(expect(error.name).to.equal('SequelizeValidationError') &&
                    expect(error.message).to.equal('notNull Violation: name cannot be null'));
                });
        });
    });

    describe('find', function () {
        it('get once company', function () {
            return this.Company.findOne({where: {name: 'buscaparking'}}).bind(this)
                .then(function (company) {
                    return expect(company.name).to.equal('buscaparking');
                });
        });
    });

    describe('delete', function () {
        it('delete a company', function () {

            return this.Company.destroy({where: {name: 'buscaparking'}})
                .then(function (result) {
                    return result;
                });


        })
    });

    afterEach(function() {
    });

});
