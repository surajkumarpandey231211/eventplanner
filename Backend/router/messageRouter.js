import express from "express";

import { dbConnection } from "../database/dbConnection.js";

const router = express.Router();


router.post("/send",sendMessage);
export default router;