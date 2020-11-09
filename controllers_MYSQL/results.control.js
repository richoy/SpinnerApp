const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('../_middleware/validate-request');
const ResultsService = require('../services/results.service');
const authorize = require('../_middleware/authorize');

// routes

router.get('/', authorize(), getAll);
router.get('/:resultId', authorize(), getById);
router.post('/', registerSchema, register);
router.put('/:resultId', authorize(), updateSchema, update);
router.delete('/', authorize(), _delete);

module.exports = router;

//Get
function getAll(req, res, next) {
    ResultsService.getAll()
        .then(results => res.json(results))
        .catch(next);
}

function getById(req, res, next) {
    ResultsService.getById(req.params.id)
        .then(results => res.json(results))
        .catch(next);
}

//Post
function registerSchema(req, res, next) {
    const objecSchema = Joi.object({
            emailAddress: Joi.string().allow(''),
            firstName: Joi.string().allow(''),
            lastName: Joi.string().allow(''),
            result: Joi.string().allow('')
        });
    validateRequest(req, next, objecSchema);
}

function register(req, res, next) {
    ResultsService.create(req.body)
        .then(() => res.json({ message: 'Data successfully saved' }))
        .catch(next);
}

// Put

function updateSchema(req, res, next) {
    const schema = Joi.object({
        emailAddress: Joi.string().empty(''),
        firstName: Joi.string().empty(''),
        textPopUp: Joi.string().empty(''),
        lastName: Joi.string().empty('')
    });
    validateRequest(req, next, schema);
}

function update(req, res, next) {
    ResultsService.update(req.params.id, req.body)
        .then(results => res.json(results))
        .catch(next);
}

function _delete(req, res, next) {
    ResultsService.delete(req.params.id)
        .then(() => res.json({ message: 'Results successfully deleted' }))
        .catch(next);
}