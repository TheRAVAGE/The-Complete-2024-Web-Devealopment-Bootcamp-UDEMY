import express from "express";
const app = express();
const port=3000;

app.get("/", (req, res) => {
    console.log(req.rawHeaders);
    res.send("<h1>Hello Page</h1>");
});

app.get("/about", (req, res) => {
    console.log(req.rawHeaders);
    res.send("<h1>About Page</h1>");
});

app.get("/contact", (req, res) => {
    console.log(req.rawHeaders);
    res.send("<h1>Contact Me : iamakhil99@gmail.com</h1>");
});

app.listen(port, () => {
    console.log(`Server started at port ${port}.`);
});