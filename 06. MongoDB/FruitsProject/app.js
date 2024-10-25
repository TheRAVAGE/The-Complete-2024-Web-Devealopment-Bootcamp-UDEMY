// Using Mongoose ODM
import mongoose from "mongoose";
import env from "dotenv";
env.config();
// connect to mongoDB through mongoose

mongoose.connect(process.env.DB_URL); //mongoDB Atlas URL here

// Create a new schema
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "!! No Name Specified !!"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

// Create a new model- basically table
const Fruit = mongoose.model("Fruit", fruitSchema);

// Insert into Fruit table
// const fruit = new Fruit({
//   rating: 10,
//   review: "Peaches are so yummy!!",
// });

// fruit.save();
// const kiwi = new Fruit({
//   name: "Kiwi",
//   rating: 10,
//   review: "The best fruit!",
// });

// const orange = new Fruit({
//   name: "Orange",
//   rating: 4,
//   review: "Too Sour",
// });

// await orange.save();

// const banana = new Fruit({
//   name: "Banana",
//   rating: 3,
//   review: "Weird Texture",
// });

// Fruit.insertMany([kiwi, orange, banana]);

// Updating the data in DB
// await Fruit.updateOne({ _id: "670b0804e498fde31b343404" }, { name: "Peach" });

// Deleting the data in DB
// await Fruit.deleteOne({ _id: "670b0804e498fde31b343404" });

//Read from DB
const fruits = await Fruit.find();
console.log(fruits);
fruits.forEach(function (fruit) {
  console.log(fruit.name);
});
// console.log(fruits);

// const peopleSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
//   favouriteFruit: fruitSchema,
// });

// const People = mongoose.model("People", peopleSchema);

// const pineapple = new Fruit({
//   name: "Pineapple",
//   rating: 9,
//   review: "Great Fruit!!",
// });

// await pineapple.save();

// const people = new People({
//   name: "Amy",
//   age: 12,
//   favouriteFruit: pineapple,
// });

// await people.save();

// await People.updateOne({ name: "John" }, { favouriteFruit: orange });

// Deleting the data in DB
// await People.deleteMany({ name: "John" });

// To close the connection
mongoose.connection.close();

//
//
//
//
//
//
//
//
//

// Using MongoDB Native Driver
// const { MongoClient } = require("mongodb");
// // Replace the uri string with your connection string.
// const uri = "mongodb://127.0.0.1:27017";
// const client = new MongoClient(uri);
// async function run() {
//   try {
//     const database = client.db("FruitsDB");
//     const fruits = database.collection("fruits");
//     const fruit = fruits.find();
//     console.log(fruit);

//     // await fruits.insertMany([
//     //   {
//     //     name: "Apple",
//     //     score: 8,
//     //     review: "Great Fruit",
//     //   },
//     //   {
//     //     name: "Orange",
//     //     score: 6,
//     //     review: "Kinda Sour",
//     //   },
//     //   {
//     //     name: "Banana",
//     //     score: 9,
//     //     review: "Great stuff!",
//     //   },
//     // ]);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
