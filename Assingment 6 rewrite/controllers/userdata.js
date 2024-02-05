const User = require('../models/userdata')

exports.GetHomeRoute = (req,res)=>{
    res.render('home',{pageTitle:'home'})
}

exports.PostUserDataRoute = (req,res)=>{
    const postuserdata  =  new User(req.body.usname)
    postuserdata.save()
    res.redirect('/user')
}


exports.UserGetRoute = (req,res)=>{
    const getuserdata  = User.feachall(getuserdata =>{
      res.render('user',{pageTitle:'user',data:getuserdata})
      console.log('user',getuserdata)
    })

    }