'use strict';

const express = require('express');
const {Music} =require('../models/index.js');
const router = express.Router();
const {musiccollection} = require('../models/index')


//Routes
router.get('/music',getMusic);
router.get('/music/:id',getOneMusic);
router.post('/music',createMusic);
router.delete('/music/:id',deleteMusic);
router.put('/music/:id',updateMusic)


//functions
// localhost:3000/music
// to get music 
async function getMusic(req,res){
    let music = await musiccollection.readCollection();
    res.status(200).json(music);
}


// localhost:3000/music/3
// to find music by id 
async function getOneMusic(req,res){
    let musicid = parseInt(req.params.id);
    let music = await musiccollection.readCollection(musicid);
    res.json(music);
}

// localhost:3000/music 
//  create music
async function createMusic(req,res){
    let newmusic= req.body;
    let music = await musiccollection.createCollection(newmusic);
    res.status(200).json(music);
}

// localhost:3000/1
// delete music
async function deleteMusic(req,res){
    let musicId = parseInt(req.params.id);
    let music = await musiccollection.deleteCollection(musicId);
    res.status(204).json(music);
}

// localhost:3000/2
// update music 
async function updateMusic(req,res){
    let musicId = parseInt(req.params.id);
  
    let musicObj = req.body;
  
    let musicData = await musiccollection.updateCollection(musicId , musicObj);
    // await musicData.update(musicObj);
    res.status(200).send(musicData);
  }



module.exports = router;