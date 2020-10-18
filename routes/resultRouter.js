const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authenticate = require('../authenticate');

const Results = require('../models/results');

const ResultsRouter = express.Router();

ResultsRouter.use(bodyParser.json());

// Authentication is ready but within comments so tests 
// can be performed easily, normalise before finishing

ResultsRouter.route('/')
    .get(authenticate.verifyOrdinaryUser, authenticate.verifyAdmin, (req, res, next) => {
        Results.find({})
        .then((results) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(results);
        }, (err) => next(err))
        .catch((err) => next(err));
    })
    .post(authenticate.verifyOrdinaryUser, authenticate.verifyAdmin, (req, res, next) => {
        Results.create(req.body)
        .then((result) => {
            console.log('Result Created ', result);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(result);
        }, (err) => next(err))
        .catch((err) => next(err))
    })
    .put(authenticate.verifyOrdinaryUser, authenticate.verifyAdmin, (req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /results');
    })
    .delete(authenticate.verifyOrdinaryUser, authenticate.verifyAdmin, (req, res, next) => {
        Results.remove({})
        .then((resp) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(resp);
        }, (err) => next(err))
        .catch((err) => next(err));
    });


// By id
ResultsRouter.route('/:resultId')
.get(authenticate.verifyOrdinaryUser, authenticate.verifyAdmin, (req, res, next) => {
    Results.findById(req.params.resultId)
    .then((result) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(result);
    }, (err) => next(err))
    .catch((err) => next(err))
})
.post(authenticate.verifyOrdinaryUser, authenticate.verifyAdmin, (req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /results/'
        + req.params.resultId);
})
.put(authenticate.verifyOrdinaryUser, authenticate.verifyAdmin, (req, res, next) => {
    Results.findByIdAndUpdate(req.params.resultId, {
        $set: req.body
    }, { new:true })
    .then((result) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(result);
    }, (err) => next(err))
    .catch((err) => next(err))
})
.delete(authenticate.verifyOrdinaryUser, authenticate.verifyAdmin, (req, res, next) => {
    Results.findByIdAndRemove(req.params.resultId)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

module.exports = ResultsRouter;