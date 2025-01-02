import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const connectDb = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URI as string);
    console.log("connected to MongoDB");
  } catch (error) {
    console.error(`error connecting to db. ${error}`);
  }
};

export default connectDb;
