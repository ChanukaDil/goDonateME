import bcryptjs from "bcryptjs";
import User from "../models/User.js";
import { createError } from "../utils/error.js";
import Donation from "../models/Donation.js";
import Need from "../models/Need.js";

export const addNeedDonation = async (req, res, next) => {
    const { item , description, mobileNo , image  } = req.body; 
   try{
      const newDonation = new Need({
        item : item,
        description: description,
        mobileNo : mobileNo,
        image : image,
      });
  
      await newDonation.save();
      return res.status(201).json({ message: "New Need Donation Added" });
    } catch (err) {
      return next(
        createError({
          message: "Internal Server Error",
          statusCode: 500,
        })
      );
    }

  };

  export const viewNeed = async (req, res, next) => {
    try {
      const donations = await Need.find();
      res.status(200).json({ data: donations, messege: "Success" });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
    // res.json("Sucess");
  };

  

