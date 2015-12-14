'use strict';

module.exports = function (sequelize, DataTypes) {
    var Company = sequelize.define("Company", {
        name: DataTypes.STRING
    }, {
        classMethods: {
            associate: function (models) {
                Company.hasMany(models.Parking)
            }
        }
    });

    return Company;
};
