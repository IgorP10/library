import dotenv from 'dotenv';
import mongoose from "mongoose";

dotenv.config();

const dbUrl = process.env.DB_URL;

mongoose.connect(dbUrl);

export default mongoose.connection;