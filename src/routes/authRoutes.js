import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { sendEmail } from "../utils/emailService.js";

const router = express.Router();

/* SIGNUP */
/* SIGNUP */
router.post("/signup", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      const error = new Error("All fields are required");
      error.statusCode = 400;
      throw error;
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      const error = new Error("User already exists");
      error.statusCode = 400;
      throw error;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword
    });

    await user.save();

    // ✅ SEND EMAIL AFTER SUCCESSFUL SIGNUP
    await sendEmail(
      email,
      "Registration Successful",
      `Hello ${name},\n\nYour registration was successful.\n\nThank you!`
    );

    

    res.status(201).json({ message: "Signup successful" });

  } catch (err) {
    next(err);
  }
});


/* SIGNIN */
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES }
    );

    res.json({ message: "Signin successful", token });
  } catch (error) {
    res.status(500).json({ message: "Signin failed" });
  }
});

export default router;
