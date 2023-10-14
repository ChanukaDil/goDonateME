import express from "express";

import { addDonation , view } from './../controllers/donation.js';

const router = express.Router();

router.post("/addDonation", addDonation);
router.use("/viewDonation", view);



export default router;
