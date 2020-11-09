const { DataTypes } = require('sequelize');

module.exports = modelResults;

function modelResults(sequelize) {
    const attributes = {
        emailAddress: { type: DataTypes.STRING },
        firstName: { type: DataTypes.STRING },
        lastName: { type: DataTypes.STRING},
        result: { type: DataTypes.STRING },
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

    return sequelize.define('ResultsSchema', attributes, options);
}