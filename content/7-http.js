const http = require('http')
const server = http.createServer((req,res)=>{

   if(req.url === '/'){
    res.end('welcome to our homepage')
   }
   if(req.url === '/about'){
    res.end('this is the history of our Website')
   }
   res.end(`
   <h>opps!</h>
   <p>We can't find the page</p>
   <a href="/"> Back to home page</a>
   `)
})
server.listen(5000) 