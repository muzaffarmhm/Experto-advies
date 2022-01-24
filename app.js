const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const thread = require('./models/thread.js');
const methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'))

mongoose.connect('mongodb://localhost/experto',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log('Connected to MongoDB');
}
).catch(err=>{
    console.log(err);
});

app.get('/',async(req,res)=>{
    const threads = await thread.find({});
    res.render('index', {threads})
})

app.get('/thread/:id',async(req,res)=>{
    const id = req.params.id;
    const threads = await thread.findById(id);
    res.render('show', {threads})
})

app.get('/new',(req,res)=>{
    res.render('new');
})

app.post('/new',async(req,res)=>{
    await thread.create(req.body);
    res.redirect('/');
})

app.get('/thread/:id/edit',async(req,res)=>{
    const id = req.params.id;
    const threads = await thread.findById(id);
    res.render('edit', {threads});
})

app.put('/:id/edit',async(req,res)=>{
    const id = req.params.id;
    await thread.findByIdAndUpdate(id,req.body);
    res.redirect('/');

})

app.delete('/thread/:id/delete',async(req,res)=>{
    const id = req.params.id;
    await thread.findByIdAndDelete(id);
    res.redirect('/');
})

app.listen(3000,()=>{
    console.log('Server started at port 3000');
})