import mongoose from "mongoose";

mongoose.connect("mongodb+srv://daniel:123@aluradb.ammutvu.mongodb.net/alura-node");


let db = mongoose.connection;

export default db;