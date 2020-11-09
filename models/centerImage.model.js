const { DataTypes } = require('sequelize');

module.exports = modelCenterImage;

function modelCenterImage(sequelize) {
    const attributes = {
        centerImage: { type: DataTypes.STRING },
        hash: { type: DataTypes.STRING }
    };

    const options = {
        defaultScope: {
            // exclude hash by default
            attributes: { exclude: ['hash'] }
        },
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        }
    };

    return sequelize.define('CenterImageSchema', attributes, options);
}