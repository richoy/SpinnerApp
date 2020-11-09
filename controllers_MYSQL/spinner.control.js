const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('../_middleware/validate-request');
const SpinnerService = require('../services/spinner.service');
const authorize = require('../_middleware/authorize');

// routes

router.get('/', getAll);
router.get('/:spinnerId', getById);
router.post('/', authorize(), registerSchema, register);
router.put('/:spinnerId', authorize(), updateSchema, update);
router.delete('/', authorize(), _delete);

module.exports = router;

//Get
function getAll(req, res, next) {
    SpinnerService.getAll()
        .then(spinnerFields => {
            for (let i=0; i<spinnerFields.length; i++) {
                spinnerFields[i].percentage = parseInt(spinnerFields[i].percentage);
            }
            res.json(spinnerFields)})
        .catch(next);
}

function getById(req, res, next) {
    SpinnerService.getById(req.params.id)
        .then(spinnerField => res.json(spinnerField))
        .catch(next);
}

//Post
function registerSchema(req, res, next) {
    const objecSchema = Joi.object({
            isItImage: Joi.boolean().required(),
            textFieldOne: Joi.string().allow(''),
            image: Joi.string().allow(''),
            percentage: Joi.number().required(),
            isItEmail: Joi.boolean().required(),
            textPopUp: Joi.string().allow(''),
            email: Joi.string().allow(''),
            bgColor: Joi.string().allow('')
        });

    const arraySchema = Joi.array().items(objecSchema).sparse(false);
    validateRequest(req, next, arraySchema);
}

function register(req, res, next) {
    SpinnerService.create(req.body)
        .then(() => res.json({ message: 'Data successfully saved' }))
        .catch(next);
}

// Put

function updateSchema(req, res, next) {
    const schema = Joi.object({
        isItImage: Joi.boolean().truthy('yes'),
        textFieldOne: Joi.string().empty(''),
        image: Joi.string().empty(''),
        percentage: Joi.number().required().empty(''),
        isItEmail: Joi.boolean().truthy('yes'),
        textPopUp: Joi.string().empty(''),
        email: Joi.string().empty(''),
        bgColor: Joi.string().empty('')
    });
    validateRequest(req, next, schema);
}

function update(req, res, next) {
    SpinnerService.update(req.params.id, req.body)
        .then(spinnerField => res.json(spinnerField))
        .catch(next);
}

function _delete(req, res, next) {
    SpinnerService.delete(req.params.id)
        .then(() => res.json({ message: 'SpinnerField successfully deleted' }))
        .catch(next);
}