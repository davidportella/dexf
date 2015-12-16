'use strict';

var expect = require('expect.js');

describe('models/index', function () {
    it('returns the company model', function () {
        var models = require('../../models');
        expect(models.Company).to.be.ok();
    });

    it('returns the parking model', function () {
        var models = require('../../models');
        expect(models.Parking).to.be.ok();
    });
});
