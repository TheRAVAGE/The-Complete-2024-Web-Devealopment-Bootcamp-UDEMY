import express from "express";

const app = express();
const port = 3000;

const d = new Date();
let day = d.getDay()
console.log(`day is ${day}.`);

//sending back

let type = "a weekday";
let adv = "Its time to work hard";

if(day===0 || day===6) {
    type = "the weekend";
    adv = "Its time to have FUN!!";
}

app.get("/", (req, res) => {
    res.render("index.ejs", {
        dayType: type,
        advice: adv, 
    });
});

// app.get("/", (req, res) => {
//     if(day === 0 || day === 6) {
//         res.send(`<h1>Hey its a weekend time to have FUN!!</h1>`);
//     }
//     else {
//         res.send(`<h1>Hey its a weekday time to do work!!</h1>`);
//     }
// });

app.listen(port,() => {
    console.log(`Server started on port ${port}.`);
});