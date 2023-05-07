import mongoose from "mongoose";

const Connection = async (password) => {
  // const URL = `mongodb+srv://${username}:${password}@bank.j1zhdnt.mongodb.net/?retryWrites=true&w=majority`;
  const URL = `mongodb+srv://ub:${password}@cluster0.mb4rsry.mongodb.net/?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("DB connected successfully.");
    // console.log(username + " " + password);
  } catch (error) {
    console.log(`Error while connecting to the DB `, error);
    // console.log(username + " " + password);
  }
};
export default Connection;
