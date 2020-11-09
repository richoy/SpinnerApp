const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('../_middleware/validate-request');
const CenterImageService = require('../services/centerImage.service');
const authorize = require('../_middleware/authorize');

// routes

router.get('/', getAll);
router.get('/:centerImageId', getById);
router.post('/', authorize(), registerSchema, register);
router.put('/:centerImageId', authorize(), updateSchema, update);
router.delete('/', authorize(), _delete);

module.exports = router;

//Get
function getAll(req, res, next) {
    CenterImageService.getAll()
        .then(centerImage => res.json(centerImage))
        .catch(next);
}

function getById(req, res, next) {
    CenterImageService.getById(req.params.id)
        .then(centerImage => res.json(centerImage))
        .catch(next);
}

//Post
function registerSchema(req, res, next) {
    const objecSchema = Joi.object({
            centerImage: Joi.string().allow(''),
        });
    validateRequest(req, next, objecSchema);
}

function register(req, res, next) {
    CenterImageService.create(req.body)
        .then(() => res.json({ message: 'Data successfully saved' }))
        .catch(next);
}

// Put

function updateSchema(req, res, next) {
    const schema = Joi.object({
        centerImage: Joi.string().empty('')
    });
    validateRequest(req, next, schema);
}

function update(req, res, next) {
    CenterImageService.update(req.params.id, req.body)
        .then(centerImage => res.json(centerImage))
        .catch(next);
}

function _delete(req, res, next) {
    CenterImageService.delete(req.params.id)
        .then(() => res.json({ message: 'centerImage successfully deleted' }))
        .catch(next);
}