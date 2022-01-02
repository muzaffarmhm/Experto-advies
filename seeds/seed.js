const express = require('express');
const app = express();
const mongoose = require('mongoose');
const thread = require('../models/thread.js');
const data = require('./data.js');

mongoose.connect('mongodb://localhost/experto',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log('Connected to MongoDB(Seed)');
})
.catch(err=>{
    console.log(err)
});

const seedDB = async ()=>{
    try{
        await thread.deleteMany({});
        console.log('Deleted all threads');
        await thread.insertMany(data)
        console.log('Inserted all threads');
    }
    catch(err){
        console.log(err);
    }
}

seedDB();