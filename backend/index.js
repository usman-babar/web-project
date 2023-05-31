import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import Connection from "./database/db.js";

import managerRoute from "./routes/manager.js";
import adminRoute from "./routes/admin.js";

const app = express()

dotenv.config();

const PORT = process.env.PORT

app.use(bodyParser.json());
app.use(cors());

app.use("/manager", managerRoute);
app.use("/admin", adminRoute)

Connection();

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});