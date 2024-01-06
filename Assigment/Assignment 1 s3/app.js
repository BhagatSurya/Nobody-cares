// spin up as node js driven server in on port 3000
// handel 2 routes / and /users 
// return some greeting text in / and list of dummy users
// add a form with username to / page and summit a post request to / create-user 
// console log the message and redireit to /users 

const http = require('http')
const serverlogic = require('./routes');

const server = http.createServer(serverlogic)


server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
