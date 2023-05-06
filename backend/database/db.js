import mongoose from "mongoose";

const Connection = async (password) => {
  const URL = `mongodb+srv://usman-babar:${password}@bank.j1zhdnt.mongodb.net/?retryWrites=true&w=majority`;

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