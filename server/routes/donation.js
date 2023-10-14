import express from "express";

import { addDonation , view , viewById } from './../controllers/donation.js';

const router = express.Router();

router.post("/addDonation", addDonation);
router.use("/viewDonation", view);
router.use("/viewById/:id", viewById);



export default router;
