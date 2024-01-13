const express = require('express')
const routes = express.Router()
const user_name = []

routes.get('/',(req,res,next)=>{
    res.render('home',{pageTitle:'Home'})
})


routes.post('/userslist',(req,res,next)=>{
    const message = req.body.usname;
    user_name.push({usname: message})
    console.log(message);
    res.redirect('/user')


})
exports.routes = routes;
exports.user_name = user_name;