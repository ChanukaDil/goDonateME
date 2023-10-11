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
        password: hashedPassword,
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