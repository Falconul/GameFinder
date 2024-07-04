import express from "express";
import { MongoClient } from "mongodb";

const app = express();

app.listen(5000, () => console.log("Server is up and running!"));

async function main() {
 
  const uri = process.env.DB_URI;
  const client = new MongoClient(
    "mongodb+srv://tayfund99:JeONxMg3SdKPZvLO@cluster0.3uez9sz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );

  try {
    await client.connect();

    console.log("DB connected");
    await addUser(client, {
      name: "Tayfun",
      email: "tayfund99@gmail.com",
      age: 26,
      car: "opel",
      smoker: true,
    });
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

async function addUser(client, newUser) {
  const result = await client
    .db("demomongoclient")
    .collection("users")
    .insertOne(newUser);
  console.log(`New user created with the following id: ${result.insertedId}`);
}

main().catch(console.error);
