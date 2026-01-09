const http = require("http");
const fs = require("fs");
const os = require("os")

const ipAdress = os.networkInterfaces()?.en0[1].address

const server = http.createServer((req, res) => {
  if (req.url) {
    const file = req.url.slice(1);
    if(file.includes(".css")){
      console.log("css fil")
        fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end("Kunne ikke læse filen");
        return;
      }

      res.writeHead(200, { "Content-Type": "text/css" });
      res.end(data);
      
    });

    }else{
     
    
    console.log(file)
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end("Kunne ikke læse filen");
        return;
      }

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });}
  } else {
    res.writeHead(404);
    res.end("Not ");
  }
});

server.listen(3000, ipAdress, () => {
  console.log("Server kører på port 3000 på ip "+ ipAdress +"link" + "http://"+ ipAdress + ":3000/index.html");
});
