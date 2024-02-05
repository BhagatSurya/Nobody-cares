const fs  =  require('fs')
const  path = require('path')

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
  );


const getProductFromFile = (cb) => {


    fs.readFile(p,(err,fileContent) => {
        if (err) {
           cb([])
        } else {

            cb(JSON.parse(fileContent))

        }
    })
}

class product {
    constructor(title,imgUrl,description ,Price){
        this.imgUrl = imgUrl
        this.description =description 
        this.Price=Price
        this.title = title;
    }
    save() {
        this.id = Math.random().toString()
        getProductFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), err => {
              console.log(err);
            });
            
        })


    }
    
    static feachAll(cb) {
        getProductFromFile(cb)

    }
}

module.exports = product