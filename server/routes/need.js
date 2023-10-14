import express from "express";

import { addNeedDonation , viewNeed } from './../controllers/need.js';

const router = express.Router();

router.post("/addNeed", addNeedDonation);
router.use("/viewNeed", viewNeed);



export default router;
