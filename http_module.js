const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('welcome')
    }
    if(req.url === '/about'){
        res.end('about')
    }
    res.end(`
        <h1>oops</h1>
        <p>we cant seem to find the page you are looking for</p>
        <a href='/'>home</a>
    `)
})

server.listen(5000)