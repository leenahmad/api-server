'use strict';

const Music = (sequelize, DataTypes) => sequelize.define('music', {
    favoriteMusic: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // unfavorableMusic: {
    //     type: DataTypes.STRING,
    // }
    // numberofsongsyoulike: {
    //     type :DataTypes.INTEGER,


    // }
})

module.exports = Music;