import express from "express";
import { signup } from "../../controllers/v1/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);

export default router;
