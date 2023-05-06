import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import Connection from "./database/db.js";

import Route from "./routes/branch.js";

const app = express();
const PORT = 3001;

// initializing .env
dotenv.config();
app.use(bodyParser.json());
app.use(cors());
app.use("/", Route);

// const username = process.env.USERNAME;
const password = process.env.PASSWORD;

// Connection(username, password);
Connection(password);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});


