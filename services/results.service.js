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
    return await db.Results.findAll();
}

async function getById(id) {
    return await getResults(id);
}

async function create(params) {
    // save Results
    await db.Results.create(params);
}

async function update(id, params) {
    const results = await getResults(id);

    // copy params to results and save
    Object.assign(results, params);
    await results.save();

    return omitHash(results.get());
}

async function _delete() {
    const results = await db.Results;
    await results.destroy({ truncate: true });
}


// helper functions

async function getResults(id) {
    const results = await db.Results.findByPk(id);
    if (!results) throw 'result not found';
    return results;
}

function omitHash(results) {
    const { hash, ...resultsWithoutHash } = results;
    return resultsWithoutHash;
}