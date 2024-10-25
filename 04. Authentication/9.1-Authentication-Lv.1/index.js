import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "123456",
  port: 5432,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;
  console.log("Email : ", email);
  console.log("Password : ", password);
  try {
    const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [email,]);

    if (checkResult.rows.length > 0){
      res.send("Email already exists. Try logging in")
    }
    else {
      await db.query("INSERT INTO users (email, password) VALUES ($1,$2)",[email, password]);
      res.render("secrets.ejs");
    }
  }
  catch (err) {
    console.log(err);
  }
  
});

app.post("/login", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;
  console.log("Email : ", email);
  console.log("Password : ", password);
  
  try {
    const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [email,]);
    const dbEmail = checkResult.rows[0].email;
    const dbPassword = checkResult.rows[0].password;
    console.log("DbEmail : ", dbEmail);
    console.log("DbPassword : ", dbPassword);
    if (checkResult.rows.length = 0){
      res.send("Email doesn't exists. Try registering your account")
    }
    else {
      if (dbPassword == password) {
        res.render("secrets.ejs");
      }
      else{
        res.send("Incorrect Password");
      }
    }
  }
  catch (err) {
    console.log(err);
  }

});

app.listen(port, () => {
  console.log(`Server running on port ${port}. Link : http://localhost:${port}/`);
});
