var request = require('supertest');
var should = require('should');

var url = 'http://192.168.99.100:3030';

describe('Account', function () {
    it('get all companies', function (done) {

        request(url)
            .get('/companies')
            .end(function (err, res) {
                if (err) {
                    throw err;
                }
                should(res).have.property('status', 200);
                done();
            });

    });

});
