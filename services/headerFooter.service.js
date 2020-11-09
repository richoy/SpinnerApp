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
    return await db.HeaderFooter.findAll();
}

async function getById(id) {
    return await getHeaderFooter(id);
}

async function create(params) {
    // save HeaderFooter
    await db.HeaderFooter.create(params);
}

async function update(id, params) {
    const headerFooter = await getHeaderFooter(id);

    // copy params to headerFooter and save
    Object.assign(headerFooter, params);
    await headerFooter.save();

    return omitHash(headerFooter.get());
}

async function _delete() {
    const headerFooter = await db.HeaderFooter;
    await headerFooter.destroy({ truncate: true });
}


// helper functions

async function getHeaderFooter(id) {
    const headerFooter = await db.HeaderFooter.findByPk(id);
    if (!headerFooter) throw 'headerFooter not found';
    return headerFooter;
}

function omitHash(headerFooter) {
    const { hash, ...headerFooterWithoutHash } = headerFooter;
    return headerFooterWithoutHash;
}