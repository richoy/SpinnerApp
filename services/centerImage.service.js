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
    return await db.CenterImage.findAll();
}

async function getById(id) {
    return await getCenterImage(id);
}

async function create(params) {
    // save centerImage
    await db.CenterImage.create(params);
}

async function update(id, params) {
    const centerImage = await getCenterImage(id);

    // copy params to centerImage and save
    Object.assign(centerImage, params);
    await centerImage.save();

    return omitHash(centerImage.get());
}

async function _delete() {
    const centerImage = await db.CenterImage;
    await centerImage.destroy({ truncate: true });
}


// helper functions

async function getCenterImage(id) {
    const centerImage = await db.CenterImage.findByPk(id);
    if (!centerImage) throw 'centerImage not found';
    return centerImage;
}

function omitHash(centerImage) {
    const { hash, ...centerImageWithoutHash } = centerImage;
    return centerImageWithoutHash;
}