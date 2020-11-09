const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('../_middleware/validate-request');
const headerFooter = require('../services/headerFooter.service');
const authorize = require('../_middleware/authorize');

// routes

router.get('/', getAll);
router.get('/:headerFooterId', getById);
router.post('/', authorize(), registerSchema, register);
router.put('/:headerFooterId', authorize(), updateSchema, update);
router.delete('/', authorize(), _delete);

module.exports = router;

//Get
function getAll(req, res, next) {
    headerFooter.getAll()
        .then(headerFooter => res.json(headerFooter))
        .catch(next);
}

function getById(req, res, next) {
    headerFooter.getById(req.params.id)
        .then(headerFooter => res.json(headerFooter))
        .catch(next);
}

//Post
function registerSchema(req, res, next) {
    const objecSchema = Joi.object({
            header: Joi.string().allow(''),
            footer: Joi.string().allow(''),
            pageTitle: Joi.string().allow(''),
            pageDescription: Joi.string().allow(''),
            favicon: Joi.string().allow('')
        });
    validateRequest(req, next, objecSchema);
}

function register(req, res, next) {
    headerFooter.create(req.body)
        .then(() => res.json({ message: 'Data successfully saved' }))
        .catch(next);
}

// Put

function updateSchema(req, res, next) {
    const schema = Joi.object({
        header: Joi.string().empty(''),
        footer: Joi.string().empty(''),
        pageTitle: Joi.string().empty(''),
        pageDescription: Joi.string().empty(''),
        favicon: Joi.string().empty('')
    });
    validateRequest(req, next, schema);
}

function update(req, res, next) {
    headerFooter.update(req.params.id, req.body)
        .then(headerFooter => res.json(headerFooter))
        .catch(next);
}

function _delete(req, res, next) {
    headerFooter.delete(req.params.id)
        .then(() => res.json({ message: 'headerFooter successfully deleted' }))
        .catch(next);
}