'use strict';

const express = require('express');
const cors = require('cors')

const logger = require('./middleware/logger.js');
const validator =require('./middleware/validator.js')

const errorHandler = require('./error-handlers/500.js');
const notFound = require('./error-handlers/404.js');

const foodRoutes = require('./routes/food.js')
const musicRoutes = require('./routes/music.js')

const app = express();

app.use(express.json());

app.use(cors());

app.use(logger);

app.use(foodRoutes);

app.use(musicRoutes);


function start(port){
    
app.listen(port, () =>{
    console.log(`running on port ${port}`)
})

}

app.get('/' , (req,res) =>{
    res.send('home route')
})


app.use(errorHandler);
app.use('*',notFound);

module.exports = {
    app: app,
    start: start,
}