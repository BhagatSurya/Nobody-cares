const fs = require('fs')
const path =  require('path')

const filepath = path.join(
    path.dirname(process.mainModule.filename), 
    'data', 
    'userdata.json'
  )
  const findUsernameinfile = (callback) => {
    fs.readFile(filepath,(err,content)=>{
        if(err) {
            callback([])
        }
        else
        {
            callback(JSON.parse(content))
        }
    })

}

module.exports = class user {
    constructor(data) {
        this.usname = data
    }

     
    save() {
        findUsernameinfile(userdata =>{
            userdata.push(this)
            fs.writeFile(filepath,JSON.stringify(userdata),err=>{
                console.log(err)
            })

        })
    }

    static feachall(callback) {

        return findUsernameinfile(callback)

    }
     
    }