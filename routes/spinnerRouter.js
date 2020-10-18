const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authenticate = require('../authenticate');
const path = require('path');
const fs = require('fs');

const Spinners = require('../models/spinner');
const directory = './public/images/';

const SpinnerRouter = express.Router();

SpinnerRouter.use(bodyParser.json());

// Authentication is ready but within comments so tests 
// can be performed easily, normalise before finishing

SpinnerRouter.route('/')
    .get((req, res, next) => {
        Spinners.find({})
        .then((spinners) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(spinners);
        }, (err) => next(err))
        .catch((err) => next(err));
    })
    .post(authenticate.verifyOrdinaryUser, authenticate.verifyAdmin, (req, res, next) => {
        Spinners.create(req.body)
        .then((spinner) => {
            console.log('Spinners Created ', spinner);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(spinner);

            removeUnusedImages();
        }, (err) => next(err))
        .catch((err) => next(err))
    })
    .put(authenticate.verifyOrdinaryUser, authenticate.verifyAdmin, (req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /spinners');
    })
    .delete(authenticate.verifyOrdinaryUser, authenticate.verifyAdmin, (req, res, next) => {
        Spinners.remove({})
        .then((resp) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(resp);
        }, (err) => next(err))
        .catch((err) => next(err));
    });


// By id
SpinnerRouter.route('/:spinnerId')
    .get((req, res, next) => {
        Spinners.findById(req.params.spinnerId)
        .then((spinner) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(spinner);
        }, (err) => next(err))
        .catch((err) => next(err))
    })
    .post(authenticate.verifyOrdinaryUser, authenticate.verifyAdmin, (req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /spinners/'
            + req.params.spinnerId);
    })
    .put(authenticate.verifyOrdinaryUser, authenticate.verifyAdmin, (req, res, next) => {
        Spinners.findByIdAndUpdate(req.params.spinnerId, {
            $set: req.body
        }, { new:true })
        .then((spinner) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(spinner);
        }, (err) => next(err))
        .catch((err) => next(err))
    })
    .delete(authenticate.verifyOrdinaryUser, authenticate.verifyAdmin, (req, res, next) => {
        Spinners.findByIdAndRemove(req.params.spinnerId)
        .then((resp) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(resp);
        }, (err) => next(err))
        .catch((err) => next(err));
    });


/**
 * Method to remove the images that are not being used.
 */
function removeUnusedImages() {

    let spinnersCurrentImages = [];

    // Check on Database for the current images
    Spinners.find({}).then((fields) =>{
        fields.forEach((element) =>{
            if( element.image.length > 0 ) {
                
                /**
                 * If spinner field has image, it adds it to the array
                 * and remove the path at the beginning
                 */
                spinnersCurrentImages.push(element.image.slice(14));
            }
        })

        /**
         * Verify if which images are currently being used
         * and remove the others
         */
        fs.readdir(directory, (err, files) => {
            if (err) throw err;
            files.forEach( (file) => {
                let isCurrent = false;
    
                spinnersCurrentImages.forEach((image) =>{
                    if( image === file ){
                        isCurrent = true;
                    }
                })
    
                if ( !isCurrent && !(file === '.gitkeep')){
                    fs.unlink(path.join(directory, file), err => {
                        if (err) throw err;
                    });
                }
            })
        });
    });
}
module.exports = SpinnerRouter;