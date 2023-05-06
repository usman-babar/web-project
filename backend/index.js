import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import Connection from "./database/db.js";

import Route from "./routes/manager.js";

const app = express();
const PORT = process.env.PORT || 3001;

dotenv.config();
app.use(bodyParser.json());
app.use(cors());
app.use("/", Route);

const password = process.env.PASSWORD;

Connection(password);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});