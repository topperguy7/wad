const http = require('http');
const fs = require('fs');
const PORT = 3000;

const server = http.createServer((req, res) => {
  fs.readFile('index.html', (err, data) => {
    if(err){

    }
    else{
      res.end(data);
    }
  })
})

server.listen(PORT, ()=>{console.log(`server running on port:${PORT}`)});