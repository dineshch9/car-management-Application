// import { MongoClient, ServerApiVersion } from "mongodb";
// const uri = "mongodb+srv://dinesh:dinesh@dinesh.2k4lr.mongodb.net/?retryWrites=true&w=majority&appName=Dinesh";
// // const URI = process.env.ATLAS_URI || "";
// // const URI = import.meta.env.ATLAS_URI || "";
// const URI=uri;

// const client = new MongoClient(URI, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// try {
//   // Connect the client to the server
//   await client.connect();
//   // Send a ping to confirm a successful connection
//   await client.db("admin").command({ ping: 1 });
//   console.log("Pinged your deployment. You successfully connected to MongoDB!");
// } catch (err) {
//   console.error(err);
// }

// let db = client.db("cars");

// export default db;
