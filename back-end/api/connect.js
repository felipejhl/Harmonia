import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://harmonia:harmon1a@cluster0.zd2h7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("harmonia");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection)