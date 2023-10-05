import bcryptjs from "bcryptjs";
import User from "../models/User.js";
import { createError } from "../utils/error.js";

export const register = async (req, res, next) => {
    const { fname , lname , email, password , district , mobile  } = req.body;
    
    if (!email || !password) {
      return next(
        createError({
          message: "Email & password are required",
          statusCode: 400,
        })
      );
    }
  
    try {
      const user = await User.findOne({ email: email });
  
      if (user) {
        return next(
          createError({ status: 404, message: "Email is already exits!" })
        );
      }
  
      const salt = await bcryptjs.genSalt(10);
      const hashedPassword = await bcryptjs.hash(password, salt);
  
      const newUser = new User({
        firstName : fname,
        lastName : lname,
        email: email,
        password: hashedPassword,
        mobileNo : mobile,
        district : district,
      });
  
      await newUser.save();
      return res.status(201).json({ message: "New User Created" });
    } catch (err) {
      return next(
        createError({
          message: "Internal Server Error",
          statusCode: 500,
        })
      );
    }
  };