import express from "express";

import {
  addManager,
  getManagers,
  getManager,
  editManager,
  deleteManager,
  searchManager,
} from "../controller/managerController.js";

const router = express.Router();

router.post("/add", addManager);
router.get("/all", getManagers);
router.post("/search", searchManager);
router.get("/:id", getManager);
router.put("/:id", editManager);
router.delete("/:id", deleteManager);


export default router;