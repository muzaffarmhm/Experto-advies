const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const thread = require('./routers/thread.js');
const methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:false}));

mongoose.connect('mongodb://localhost/experto',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log('Connected to MongoDB');
}
).catch(err=>{
    console.log(err);
});

app.use('/',require(thread));

app.listen(3000,()=>{
    console.log('Server started at port 3000');
})