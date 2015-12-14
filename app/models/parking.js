'use strict';

module.exports = function(sequelize, DataTypes) {
    var Parking = sequelize.define("Parking", {
        name: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                Parking.belongsTo(models.Company, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    });

    return Parking;
};