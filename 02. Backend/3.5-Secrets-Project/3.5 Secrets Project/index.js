//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

//code starts here
import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

//bodyparser
app.use(bodyParser.urlencoded({extended: true}));

//submit pasword:
app.post("/check", (req, res)=> {
    console.log(req.body);
    if(req.body.password === "ILoveProgramming")
        res.sendFile(__dirname+"/public/secret.html")
    else{
        res.sendFile(__dirname+"/public/index.html")
    }
  });

//sendFile index.html
app.get("/", (req,res) =>{
    res.sendFile(__dirname+"/public/index.html");
});

//listens to requests
app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});