const Router = require('express').Router();
const thread = require('../models/thread.js');

Router.get('/',async(req,res)=>{
    const threads = await thread.find({});
    res.render('index', {threads})
})

Router.get('/thread/:id',async(req,res)=>{
    const id = req.params.id;
    const threads = await thread.findById(id);
    res.render('show', {threads})
})

Router.get('/new',(req,res)=>{
    res.render('new');
})

Router.post('/new',async(req,res)=>{
    await thread.create(req.body);
    res.redirect('/');
})

Router.get('/thread/:id/edit',async(req,res)=>{
    const id = req.params.id;
    const threads = await thread.findById(id);
    res.render('edit', {threads});
})

Router.put('/:id/edit',async(req,res)=>{
    const id = req.params.id;
    await thread.findByIdAndUpdate(id,req.body);
    res.redirect('/');

})

Router.delete('/thread/:id/delete',async(req,res)=>{
    const id = req.params.id;
    await thread.findByIdAndDelete(id);
    res.redirect('/');
})

module.exports = Router;