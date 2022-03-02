'use strict';

const express = require('express');
const {Food} =require('../models/index.js');
const router = express.Router();
const {foodcollection} = require('../models/index')


//Routes
router.get('/food',getFood);
router.get('/food/:id',getOneFood);
router.post('/food',createFood);
router.delete('/food/:id',deleteFood);
router.put('/food/:id',updateFood)


//functions
// localhost:3000/food
// to get food 
async function getFood(req,res){
    let food = await foodcollection.readCollection();
    res.status(200).json(food);
}


// localhost:3000/food/3
// to find food by id 
async function getOneFood(req,res){
    let foodid = parseInt(req.params.id);
    let food = await foodcollection.readCollection(foodid);
    console.log('inside function',food);
    res.json(food);
}

// localhost:3000/food 
//  create food
async function createFood(req,res){
    let newFood = req.body;
    let food = await foodcollection.createCollection(newFood);
    res.status(200).json(food);
}

// localhost:3000/1
// delete food
async function deleteFood(req,res){
    let foodId = parseInt(req.params.id);
    let food = await foodcollection.deleteCollection(foodId);
    res.status(204).json(food);
}

// localhost:3000/2
// update food 
async function updateFood(req,res){
    let foodId = parseInt(req.params.id);
  
    let foodObj = req.body;
  
    let foodData = await foodcollection.updateCollection(foodId , foodObj);
    // await foodData.update(foodObj);
    res.status(200).send(foodData);
  }



module.exports = router;