import express from "express";
import user from "./user.js";
import donation from "./donation.js";


const router = express.Router();

router.use("/user", user);
router.use("/donation", donation);


export default router;
