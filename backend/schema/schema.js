import mongoose from "mongoose";
import increment from "mongoose-auto-increment";

const managerSchema = mongoose.Schema({
  name: { type: String, required: [true, 'Enter the name'], trim: true },
  // gender: { type: String, required: true, lowercase: true, enum: ["male", "female"] },
  // address: { type: String, required: true },
  date_of_birth: { type: String, required: true, minlength: 6 },
  username: { type: String, unique: true, required: true },
  password: { type: String, maxlength: 10, required: true, unique: true },
  phone_number: { type: String, required: true },
  // role: { type: String, lowercase: true, required: true },
  cnic_number: { type: String, unique: true, maxlength: 12, required: true },
  creation_date: { type: Date, default: Date.now() }
});

increment.initialize(mongoose.connection);
managerSchema.plugin(increment.plugin, "manager");

const manager = mongoose.model("manager", managerSchema);

export default manager;