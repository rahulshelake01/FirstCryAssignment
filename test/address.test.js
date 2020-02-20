var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();
var { Address } = require("../db")

chai.use(chaiHttp);

describe('CRUD with address', function() {

    it('Should add address /api/address POST', function(done) {
        chai.request(server)
        .post('/api/address')
        .send({
            "state": "MP",
            "district" : "Solapur",
            "pin": 411035,
            "landmark": "Hanuman Temple",
            "housename": "Sai Krupa",
            "housenumber": 100
        })
        .end(function(err, res) {
            res.should.have.status(200);
            res.should.be.json;
            res.body.address.should.have.property('_id');
            res.body.message.should.equal('Address added successfully.');
            done(err)
        })
    })

    it('Should get all address list /api/address GET', function(done) {

        chai.request(server)
        .get('/api/address')
        .end(function(err, res) {
            res.should.have.status(200)
            res.should.be.json;
            res.body.address.should.be.an('array');
            done(err)
        })

    })

    it('Should get single address /api/address/{id} GET', function(done) {

        Address.findOne(function(err, data) {
            chai.request(server)
            .get(`/api/address/${data._id}`)
            .end(function(err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.address.should.have.property('_id');
                done(err)
            })    
        })

    })

    it('Should update address /api/address/{id} PUT', function(done) {

        Address.findOne(function(err, data) {
            chai.request(server)
            .put(`/api/address/${data._id}`)
            .send({
                state: "MP"
            })
            .end(function(err, res) {
                res.should.have.status(200);
                res.body.message.should.equal('Address updated successfully.');
                done(err)
            })
        })

    })

    it('Should delete address /api/address/{id} DELETE', function(done) {

        Address.findOne(function(err, data) {
            chai.request(server)
            .delete(`/api/address/${data._id}`)
            .end(function(err, res) {
                res.should.have.status(200);
                res.body.message.should.equal('Address deleted successfully.');
                done(err)
            })
        })
    })

})