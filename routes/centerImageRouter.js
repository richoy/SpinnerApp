const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authenticate = require('../authenticate');

const CenterImage = require('../models/centerImage');
const removeUnusedImages = require('../controllers/removeImages');

const CenterImageRouter = express.Router();

CenterImageRouter.use(bodyParser.json());

// Authentication is ready but within comments so tests 
// can be performed easily, normalise before finishing

CenterImageRouter.route('/')
    .get((req, res, next) => {
        CenterImage.find({})
        .then((centerImage) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(centerImage);
        }, (err) => next(err))
        .catch((err) => next(err));
    })
    .post(authenticate.verifyOrdinaryUser, authenticate.verifyAdmin, (req, res, next) => {
        CenterImage.create(req.body)
        .then((centerImage) => {
            console.log('centerImage Created ', centerImage);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(centerImage);

            removeUnusedImages();
        }, (err) => next(err))
        .catch((err) => next(err))
    })
    .put(authenticate.verifyOrdinaryUser, authenticate.verifyAdmin, (req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /centerImage');
    })
    .delete(authenticate.verifyOrdinaryUser, authenticate.verifyAdmin, (req, res, next) => {
        CenterImage.remove({})
        .then((resp) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(resp);
        }, (err) => next(err))
        .catch((err) => next(err));
    });

    // By id
CenterImageRouter.route('/:centerImageId')
    .get((req, res, next) => {
        CenterImage.findById(req.params.centerImageId)
        .then((centerImage) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(centerImage);
        }, (err) => next(err))
        .catch((err) => next(err))
    })
    .post(authenticate.verifyOrdinaryUser, authenticate.verifyAdmin, (req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /centerImage/'
            + req.params.centerImageId);
    })
    .put(authenticate.verifyOrdinaryUser, authenticate.verifyAdmin, (req, res, next) => {
        CenterImage.findByIdAndUpdate(req.params.centerImageId, {
            $set: req.body
        }, { new:true })
        .then((centerImage) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(centerImage);
        }, (err) => next(err))
        .catch((err) => next(err))
    })
    .delete(authenticate.verifyOrdinaryUser, authenticate.verifyAdmin, (req, res, next) => {
        CenterImage.findByIdAndRemove(req.params.centerImageId)
        .then((resp) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(resp);
        }, (err) => next(err))
        .catch((err) => next(err));
    });

module.exports = CenterImageRouter;