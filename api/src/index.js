const http = require("http");
const characters = require("./utils/data.js")


const PORT=3001;

http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');

    const url = req.url.split("/")
    const param1 = url[1]
    const param2 = url[2]
    const id = [3]

    if (param1 === "rickandmorty" && param2 === "characters"){
        return res.writeHead(200,{"Content-type": "application/json"}).end(JSON.stringify(characters))
    }
    if (req.url === "/"){
        return res.writeHead(200,{"Content-type": "text/plain"}).end("Server Rick"); 
    }
   
}).listen(PORT, ()=>{
    console.log("in port http://localhost:3001")
})