'use strict';

const Food = (sequelize, DataTypes) => sequelize.define('food', {
    favoriteFood: {
        type: DataTypes.STRING,
        allowNull: false
    },
    unfavorableFood: {
        type: DataTypes.STRING,
    }
})

module.exports = Food;