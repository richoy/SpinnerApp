const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authenticate = require('../authenticate');
const path = require('path');
const fs = require('fs');

const HeaderFooter = require('../models/headerFooter');
const directory = './public/images/';

const HeaderFooterRouter = express.Router();

HeaderFooterRouter.use(bodyParser.json());

// Authentication is ready but within comments so tests 
// can be performed easily, normalise before finishing

HeaderFooterRouter.route('/')
    .get((req, res, next) => {
        HeaderFooter.find({})
        .then((headerFooter) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(headerFooter);
        }, (err) => next(err))
        .catch((err) => next(err));
    })
    .post(authenticate.verifyOrdinaryUser, authenticate.verifyAdmin, (req, res, next) => {
        HeaderFooter.create(req.body)
        .then((headerFooter) => {
            console.log('headerFooter Created ', headerFooter);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(headerFooter);

            removeUnusedImages();
        }, (err) => next(err))
        .catch((err) => next(err))
    })
    .put(authenticate.verifyOrdinaryUser, authenticate.verifyAdmin, (req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /headerFooter');
    })
    .delete(authenticate.verifyOrdinaryUser, authenticate.verifyAdmin, (req, res, next) => {
        HeaderFooter.remove({})
        .then((resp) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(resp);
        }, (err) => next(err))
        .catch((err) => next(err));
    });

    // By id
HeaderFooterRouter.route('/:header-footerId')
    .get((req, res, next) => {
        HeaderFooter.findById(req.params.header-footerId)
        .then((headerFooter) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(headerFooter);
        }, (err) => next(err))
        .catch((err) => next(err))
    })
    .post(authenticate.verifyOrdinaryUser, authenticate.verifyAdmin, (req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /headerFooter/'
            + req.params.header-footer);
    })
    .put(authenticate.verifyOrdinaryUser, authenticate.verifyAdmin, (req, res, next) => {
        HeaderFooter.findByIdAndUpdate(req.params.header-footerId, {
            $set: req.body
        }, { new:true })
        .then((headerFooter) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(headerFooter);
        }, (err) => next(err))
        .catch((err) => next(err))
    })
    .delete(authenticate.verifyOrdinaryUser, authenticate.verifyAdmin, (req, res, next) => {
        HeaderFooter.findByIdAndRemove(req.params.header-footerId)
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

    let headerFooterCurrentImages = [];

    // Check on Database for the current images
    HeaderFooter.find({}).then((fields) =>{
        fields.forEach((element) =>{
            if( element.image.length > 0 ) {
                
                /**
                 * If HeaderFooter field has image, it adds it to the array
                 * and remove the path at the beginning
                 */
                headerFooterCurrentImages.push(element.image.slice(14));
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
    
                headerFooterCurrentImages.forEach((image) =>{
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
module.exports = HeaderFooterRouter;