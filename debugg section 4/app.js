const http = require('http')
const routes =  require('./routes')
// you can save npm pakages as --save -dev it will add to production 
// you use  --save as production pakage asn y
// yyou can ude --g for global

//type of error 
//1) syntax error 2) runtime 3) Logic errors 
const server = http.createServer(routes)

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});


