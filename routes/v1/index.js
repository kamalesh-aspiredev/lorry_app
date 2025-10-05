import express from "express";
const router = express.Router();
import authRoutes from "./auth.routes.js";
import drtypeRoutes from "./drtypes.routes.js";

router.use("/auth", authRoutes);
router.use("/dr-types", drtypeRoutes);

export default router;
