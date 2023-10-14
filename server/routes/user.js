import express from "express";
import { register , login , getUserById } from "../controllers/user.js";

const router = express.Router();

router.post("/register", register);
router.use("/login", login);
router.use("/getUserById", getUserById);


export default router;
