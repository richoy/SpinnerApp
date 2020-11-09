const { DataTypes } = require('sequelize');

module.exports = modelHeaderFooter;

function modelHeaderFooter(sequelize) {
    const attributes = {
        header: { type: DataTypes.STRING },
        footer: { type: DataTypes.STRING },
        pageTitle: { type: DataTypes.STRING},
        pageDescription: { type: DataTypes.STRING },
        favicon: { type: DataTypes.STRING },
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

    return sequelize.define('HeaderFooterSchema', attributes, options);
}