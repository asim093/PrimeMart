import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  token: { type: String, default: "" },
  otp: {
    value: { type: String },
    expireAt: { type: Date },
    verified: { type: Boolean, default: false },
  },
});

export const UserModle = mongoose.model("user", UserSchema);
