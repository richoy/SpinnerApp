//mongodb
var mongoose = require('mongoose');
var User = require('../models/user');
const passportLocalMongoose = require('passport-local-mongoose');


const saySomething = (req, res, next) => {
    res.status(200).json({
        body: 'Hello from the server! Test 2'
    });
};

module.exports.saySomething = saySomething;