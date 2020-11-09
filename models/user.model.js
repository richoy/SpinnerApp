const { DataTypes } = require('sequelize');

module.exports = modelUser;

function modelUser(sequelize) {
    const attributes = {
        username: { type: DataTypes.STRING, allowNull: false },
        hash: { type: DataTypes.STRING, allowNull: false }
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

    return sequelize.define('UserSchema', attributes, options);
}