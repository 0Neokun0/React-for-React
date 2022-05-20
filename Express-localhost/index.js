const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World"));

app.post("/", (req, res) => res.send("Hello From Post Method"));

app.use(express.static("public"));

app.listen(port, ()=>{
    console.log("Server is a http://localhost:3000")
});