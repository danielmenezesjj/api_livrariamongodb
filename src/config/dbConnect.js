import mongoose from "mongoose";

mongoose.connect("mongodb+srv://daniel:123@aluradb.ammutvu.mongodb.net/alura-node");
//                mongodb+srv://daniel:<password>@aluradb.ammutvu.mongodb.net/?retryWrites=true&w=majority


let db = mongoose.connection;

export default db;