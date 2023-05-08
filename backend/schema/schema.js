import mongoose from 'mongoose'

// import autoIncrement from 'mongoose-auto-increment'

const { Schema } = mongoose;

const managerSchema = new Schema({
    name: { type: String, required: [true, 'Enter the name'], trim: true },
    date_of_birth: { type: String, required: true, minlength: 6 },
    username: { type: String, unique: true, required: true },
    password: { type: String, maxlength: 10, required: true, unique: true },
    phone_number: { type: String, required: true },
    creation_date: { type: Date, default: Date.now() }
});


const adminSchema = new Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, maxlength: 10, required: true, unique: true },
});


// autoIncrement.initialize(mongoose.connection);
// managerSchema.plugin(autoIncrement.plugin,"manager")

const Manager = mongoose.model('manager', managerSchema);
const Admin = mongoose.model('admin', adminSchema);
export default (Manager, Admin);