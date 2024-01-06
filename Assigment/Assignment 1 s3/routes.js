// spin up as node js driven server in on port 3000
// handel 2 routes / and /users 
// return some greeting text in / and list of dummy users
// add a form with username to / page and summit a post request to / create-user 
// console log the message and redireit to /users 



const http = require('http');


const serverlogic = (req,res) => {
    const url = req.url
    const method =  req.method
// let message = ''; // Declare the message variable outside of the if blocks

if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head>');
    res.write('<title>Home</title>');
    res.write('</head>');
    res.write('<body>');
    res.write('<h2>Fill the form</h2>');
    res.write('<form action="/user" method="POST">');
    res.write('<p>');
    res.write('<label>Username: <input type="text" name="username" /></label>'); // Added name attribute
    res.write('<button type="submit">Submit</button>');
    res.write('</p>');
    res.write('</form>');
    res.write('<h2>Check your course</h2>');
    res.write('<ul>');
    res.write('<li>course 1</li>');
    res.write('<li>course 2</li>');
    res.write('<li>course 3</li>');
    res.write('</ul>');
    res.write('</body>');
    res.write('</html>');
    return res.end()
}
if (url==='/user' && method==='POST'){
    const body = [] 
    req.on('data',(chunk) => {
        body.push(chunk)
    })
    req.on('end',()=> {
        const parsbody = Buffer.concat(body).toString()
        console.log(parsbody)
        const message = parsbody.split('=')[1]
        console.log(message)
        console.log('Received message:', message);
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head>');
        res.write('<title>User</title>');
        res.write('</head>');
        res.write('<body>');
        res.write('<h2>User Page</h2>');
        res.write('<p>Received message: ' + message + '</p>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
})

};
}
module.exports = serverlogic