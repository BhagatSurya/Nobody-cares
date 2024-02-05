const product = require('../models/product')




 exports.GetProducts = (req,res,next) =>{
    //res.sendFile(path.join(rootdir,'views','shop.html'))
    const products = product.feachAll((products)=>{
      res.render('shop/product-list',{prodsdata: products,
        pageTitle:'ALL products',
        path:'/products' })
    })

}

exports.getProductid = (req, res, next) => {
  const prodId = req.params.productId;
  console.log(prodId);
  res.redirect('/');
};

exports.getIndex = (req,res,next) => {

product.feachAll((products)=>{
    res.render('shop/index',{prodsdata: products,
      pageTitle:'Shop',
      path:'/',})
  })
      
}



exports.getcart = (req,res,next) => {
  res.render('shop/cart',{path:'/cart',
  pageTitle:'your Cart'})
}


exports.getOrder = (req,res,next) => {
  res.render('shop/cart',{path:'/cart',
  pageTitle:'your Cart'})
}

exports.getCheckout = (req,res,next) => {
  res.render('shop/checkout',{
  path:'/checkout',
  pageTitle:'Checkout'
  })
}