import bcryptjs from "bcryptjs";
import User from "../models/User.js";
import { createError } from "../utils/error.js";
import Donation from "../models/Donation.js";

export const addDonation = async (req, res, next) => {
    const { item , quantity , description, mobileNo , image  } = req.body; 
   try{
      const newDonation = new Donation({
        item : item,
        quantity : quantity,
        description: description,
        mobileNo : mobileNo,
        image : image,
      });
  
      await newDonation.save();
      return res.status(201).json({ message: "New Donation Added" });
    } catch (err) {
      return next(
        createError({
          message: "Internal Server Error",
          statusCode: 500,
        })
      );
    }
  };

  export const view = async (req, res, next) => {
    try {
      const donations = await Donation.find();
      res.status(200).json({ data: donations, messege: "Success" });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
    // res.json("Sucess");
  };

  