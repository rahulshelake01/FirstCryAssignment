var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();
var { Student, Address } = require("../db")

chai.use(chaiHttp);

describe('CRUD with students', function() {

    it('Should add student /api/student POST', function(done) {

        var newAddress = new Address({
            state: "MH",
            district : "Solapur",
            pin: 411035,
            landmark: "Hanuman Temple",
            housename: "Sai Krupa",
            housenumber: 100
        })

        newAddress.save(function(err, data) {
            chai.request(server)
            .post('/api/student')
            .send({
                roll_no: 100,
                fname:"ABC",
                lname: "XYZ",
                class: "10",
                address: data._id,
                parent_contact_no: 9700000000
            })
            .end(function(err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.student.should.have.property('_id');
                res.body.message.should.equal('Student added successfully.');
                done(err)
            })
        })
    })

    it('Should list all students /api/student GET', function(done) {

        chai.request(server)
        .get('/api/student')
        .end(function(err, res) {
            res.should.have.status(200)
            res.should.be.json;
            res.body.student.should.be.an('array');
            done(err)
        })

    });

    it('Should get single student /api/student/{id} GET', function(done) {

        Student.findOne({}, function(err, data) {
            chai.request(server)
            .get(`/api/student/${data._id}`)
            .end(function(err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.student.should.have.property('_id');
                done(err)
            })
        })

    })

    it('Should update student /api/student/{id} PUT', function(done) {

        Student.findOne({}, function(err, data) {
            chai.request(server)
            .put(`/api/student/${data._id}`)
            .send({
                fname: "Ramesh",
                lname: "Patil"
            })
            .end(function(err, res) {
                res.should.have.status(200);
                res.body.message.should.equal('Student updated successfully.');
                done(err)
            })
        })

    })

    it('Should delete student /api/student/{id} DELETE', function(done) {

        Student.findOne({}, function(err, data) {
            chai.request(server)
            .delete(`/api/student/${data._id}`)
            .end(function(err, res) {
                res.should.have.status(200);
                res.body.message.should.equal('Student deleted successfully.');
                done(err)
            })
        })
    })

});