'use strict '

const logger = (req, res ,next) =>{
    console.log('req', req.path , req.method)

    next();
}

module.exports = logger;