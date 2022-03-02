'use strict';

const {Sequelize, DataTypes, col} = require('sequelize'); // npm i pg sequelize
const food = require('./food.js');
const music = require('./music.js');
const collection = require('./collection-class')

// prepare the connection
const POSTGRES_URL =process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;



let sequelizeOptions =  process.env.NODE_ENV === 'production' ?{
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    }
  } : {};


let sequelize = new Sequelize(POSTGRES_URL,sequelizeOptions);

let foodModel = food(sequelize,DataTypes);
let foodCollect = new collection(foodModel);

let musicModel = music(sequelize,DataTypes);
let musicCollect = new collection(musicModel);


module.exports = {
    db: sequelize, //for real connection and will use it in index.js
    foodcollection: foodCollect,// for creating the table and will use it in our routes
    musiccollection: musicCollect
}