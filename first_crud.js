const express = require('express');
const mongoose = require('mongoose');
const app = express();
const operations = require('./routehandler/operation_handler');
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/MyBbase')
.then(()=> console.log('Connection stablished with MongoDB Database..........'))
.catch((err)=> console.error("There was an error to connect the database.......",err));

app.use('/operations',operations);

function err_handler(err,req,res,next)
{
    if(res.headersSent)
    {
        return next(err);
    }
    res.status(500).json({error: err.message});
}

app.listen('1234',()=> console.log('Connection with the port is successfull..........'));
