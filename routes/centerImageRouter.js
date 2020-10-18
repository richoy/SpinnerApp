const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authenticate = require('../authenticate');
const path = require('path');
const fs = require('fs');

const CenterImage = require('../models/centerImage');
const directory = './public/images/';

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
    .post(/*authenticate.verifyOrdinaryUser, authenticate.verifyAdmin,*/ (req, res, next) => {
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
    .put(/*authenticate.verifyOrdinaryUser, authenticate.verifyAdmin,*/ (req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /centerImage');
    })
    .delete(/*authenticate.verifyOrdinaryUser, authenticate.verifyAdmin,*/ (req, res, next) => {
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
    .post(/*authenticate.verifyOrdinaryUser, authenticate.verifyAdmin,*/ (req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /centerImage/'
            + req.params.centerImageId);
    })
    .put(/*authenticate.verifyOrdinaryUser, authenticate.verifyAdmin,*/ (req, res, next) => {
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
    .delete(/*authenticate.verifyOrdinaryUser, authenticate.verifyAdmin,*/ (req, res, next) => {
        CenterImage.findByIdAndRemove(req.params.centerImageId)
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

    let CenterImageCurrentImages = [];

    // Check on Database for the current images
    CenterImage.find({}).then((fields) =>{
        fields.forEach((element) =>{
            if( element.image.length > 0 ) {
                
                /**
                 * If CenterImage field has image, it adds it to the array
                 * and remove the path at the beginning
                 */
                CenterImageCurrentImages.push(element.image.slice(14));
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
    
                CenterImageCurrentImages.forEach((image) =>{
                    if( image === file ){
                        isCurrent = true;
                    }
                })
    
                if ( !isCurrent ){
                    fs.unlink(path.join(directory, file), err => {
                        if (err) throw err;
                    });
                }
            })
        });
    });
}
module.exports = CenterImageRouter;