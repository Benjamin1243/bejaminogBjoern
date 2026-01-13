const http = require("http")
const os = require("os")
const ipAdress = os.networkInterfaces()?.en0[1].address

const server = http.createServer(  (req, res) => {
    
  req.setEncoding("utf-8")
  let outputData = "";
   req.on("data", (text)=>{
    outputData += text.toString("")
  })
  req.on("end", () => {
      console.log("Modtaget data: " + outputData);
      console.log( "output + " + outputData)
  const vars = outputData.split("=")
  console.log(vars)
  res.setHeader("Content-Type", "text/html" )
  res.end("<h1>hej " + vars[1].split("&")[0]  +"</h1>")
})
  
});

server.listen(4000, ipAdress, () => {
  console.log("Server kører på port 4000 på ip "+ ipAdress +"link" + "http://"+ ipAdress + ":3000/index.html");
});
