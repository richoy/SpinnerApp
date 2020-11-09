const config = require('../config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../_helper/db');

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function getAll() {
    return await db.Spinner.findAll();
}

async function getById(id) {
    return await getSpinnerField(id);
}

async function create(params) {
    // save spinner
    await db.Spinner.bulkCreate(params);
}

async function update(id, params) {
    const spinnerField = await getSpinnerField(id);

    // copy params to spinnerField and save
    Object.assign(spinnerField, params);
    await spinnerField.save();

    return omitHash(spinnerField.get());
}

async function _delete() {
    const spinnerField = await db.Spinner;
    await spinnerField.destroy({ truncate: true });
}


// helper functions

async function getSpinnerField(id) {
    const spinnerField = await db.Spinner.findByPk(id);
    if (!spinnerField) throw 'spinnerField not found';
    return spinnerField;
}

function omitHash(spinnerField) {
    const { hash, ...spinnerFieldWithoutHash } = spinnerField;
    return spinnerFieldWithoutHash;
}