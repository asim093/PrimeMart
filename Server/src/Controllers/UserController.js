import { UserModle } from "../models/UserSchema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import sendMail from "../utilities/EmailSend.js";

export const Signup = async (req, res) => {
  try {
    console.log("Request received:", req.body);

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      console.log("Missing fields");
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await UserModle.findOne({ email });
    if (existingUser) {
      console.log("Email already exists");
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await UserModle.create({
      name,
      email,
      password: hashedPassword,
    });
    const payload = {
      user: {
        id: user._id,
      },
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    user.token = token;
    await user.save();
    console.log("User created successfully:", user);

    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    console.error("Signup error:", error.message);
    res.status(500).json({ message: error.message });
  }
};

export const Login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  const user = await UserModle.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const payload = {
    user: {
      id: user._id,
    },
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  user.token = token;
  await user.save();
  console.log("User created successfully:", user);

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Incorrect password" });
  }

  res.status(200).json({ message: "User Login Successfull", user });
};

export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      console.log("Email field is missing");
      return res.status(400).json({
        message: "Email is required",
        status: "failed",
      });
    }

    const user = await UserModle.findOne({ email });
    if (!user) {
      console.log("User not found for email:", email);
      return res.status(404).json({
        message: "User not found",
        status: "failed",
      });
    }

    const otp = Math.floor(Math.random() * 900000 + 100000);
    console.log("Generated OTP:", otp);

    const mailResponse = await sendMail({
      email: [email],
      subject: "OTP Verification Code",
      htmlTemplate: `<h1>OTP: ${otp}</h1>`,
    });

    if (!mailResponse) {
      console.log("Failed to send email");
      return res.status(500).json({
        message: "Failed to send OTP, please try later",
        status: "failed",
      });
    }

    user.otp = {
      value: otp.toString(),
      expireAt: new Date(Date.now() + 1000 * 60 * 10),
      verified: false,
    };

    await user.save();
    console.log("OTP sent successfully to:", email);

    res.status(200).json({
      message: "OTP sent successfully",
      status: "success",
    });
  } catch (error) {
    console.error("ForgotPassword API Error:", error.message);
    res.status(500).json({
      message: "Internal Server Error",
      status: "failed",
    });
  }
};

export const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp) {
      return res
        .status(400)
        .json({ message: "All fields are required", status: "failed" });
    }

    const user = await UserModle.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found", status: "failed" });
    }

    if (user.otp.value !== otp.toString()) {
      return res.status(400).json({ message: "Invalid OTP", status: "failed" });
    }
    const currentTime = new Date();
    if (user.otp.expireAt < currentTime) {
      return res
        .status(400)
        .json({ message: "OTP is expired", status: "failed" });
    }
    user.otp.verified = true;
    await user.save();
    res
      .status(200)
      .json({ message: "OTP Verified Successfully", status: "success" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Interval Server Error", status: "failed" });
  }
};

export const resetPassword = async(req, res) => {
  try {
      const { email, password } = req.body;
      if (!email || !password) {
          return res.status(400).json({ message: "All fields are required", status: "failed" })
      }
      const user = await UserModle.findOne({ email });
      if (!user) {
          return res.status(404).json({ message: "User not found", status: "failed" })
      }

      if (!user.otp.verified) {
          return res.status(404).json({ message: "OTP Authentication failed, you are not verified user", status: "failed" })
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      user.password = hashedPassword;
      user.otp.verified = false;
      // create JWT token
      const payload = {
          user: {
              id: user._id
          }
      }
      const token = jwt.sign(
          payload,
          Constants.JWT_SECRET,
          { expiresIn: "1y" }
      )

      user.token = token;
      await user.save();

      res.status(200).json({ message: "Password Update Successfully", status: "success" })

  } catch (error) {
      res.status(500).json({ message: "Interval Server Error", status: "failed" })
  }
}

