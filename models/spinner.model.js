const { DataTypes } = require('sequelize');

module.exports = modelSpinner;

function modelSpinner(sequelize) {
    const attributes = {
        isItImage: { type: DataTypes.BOOLEAN },
        textFieldOne: { type: DataTypes.STRING },
        image: { type: DataTypes.STRING },
        percentage: { type: DataTypes.INTEGER(3) },
        isItEmail: { type: DataTypes.BOOLEAN },
        textPopUp: { type: DataTypes.STRING},
        email: { type: DataTypes.STRING },
        bgColor: { type: DataTypes.STRING },
        hash: { type: DataTypes.STRING }
    };

    const options = {
        dialect: 'mysql',
        dialectOptions: {
            supportBigNumbers: true,
            decimalNumbers: true
          },
        defaultScope: {
            // exclude hash by default
            attributes: { exclude: ['hash'] }
        },
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        }
    };

    return sequelize.define('SpinnerSchema', attributes, options);
}