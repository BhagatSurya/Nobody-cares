const fs =  require('fs')

const requestHanderler = (req,res) => {
    const url = req.url
    const method =  req.method
    if (url ==='/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter a Message</title></head>');
        res.write('<body>');
        res.write('<form action="/message" method="POST">');
        res.write('<input type="text" name="message">');
        res.write('<button type="submit">Submit</button>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end()
    }
    //stream buffering
    
    if (url ==='/message' && method ==='POST') {
        const body =[]
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk)
        })
        req.on('end',() => {
            const parBody = Buffer.concat(body).toString()
            console.log(parBody)
            const message = parBody.split('=')[1]
            fs.writeFile('message.txt',message,err =>{
                res.statusCode = 320;
                res.setHeader('Location','/')
                return res.end()
            })
    
        })
    
    
    }
    res.setHeader('content-Type','text/html')
    res.write('</html>')
    res.write('<head><title>My first page</title><head>')
    res.write('<body><h1>responds from server</h1></body>')
    res.write('</html>')
    res.end()
}

module.exports =  requestHanderler