let nom = "HELLO WORLD";
console.log(nom);

//server
const http = require("http");
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200 ; 
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello Node !!!!");
});
    server.listen(port, () => {
        console.log("server en ligne sur http://localhost:${port}");
    });



    const fs = require ("fs");
    fs.writeFileSync("Welcome.txt", "Hello Node");
    const data = fs.readFileSync("Welcome.text", "utf8");
    console.log(data);


    

