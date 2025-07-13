import mongoose from "mongoose";

const DB_URI = "mongodb+srv://root:root@cluster0.klfbmop.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

await mongoose.connect(DB_URI);

const db = mongoose.connection.db;

clg("Database Connected!");

export default db;