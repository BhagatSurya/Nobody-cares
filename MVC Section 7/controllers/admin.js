const product = require('../models/product');

exports.getADDProduct = (req, res, next) => {
  console.log('In getADDProduct');
  res.render('admin/add-product', {
    pageTitle: 'Add product',
    path: '/admin/add-product',
    fromCSS: true,
    productCSS: true,
    activeADDproduct: true
  });
};

exports.postAddProduct = (req, res, next) => {
  console.log('In postAddProduct');
  const title = req.body.title;
  const imageUrl = req.body.imgUrl;
  const price = req.body.price;
  const description = req.body.description;
  const products = new product(title, imageUrl, price, description);
  try {
    products.save();
  } catch (err) {
    console.log('Error in postAddProduct:', err);
  }
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  console.log('In getProducts');
  product.feachAll(products => {
    res.render('admin/products', {
      prodsdata: products,
      pageTitle: 'Admin products',
      path: '/admin/products',
    });
  });
};
