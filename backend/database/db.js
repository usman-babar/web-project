import mongoose from "mongoose";
import dotenv from "dotenv";

const Connection = async (password) => {
  const URL = process.env.MONGODB_URL_first + password + process.env.MONGODB_URL_second;

  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("DB connected successfully.");
  } catch (error) {
    console.log(`Error while connecting to the DB `, error);
  }
};
export default Connection;