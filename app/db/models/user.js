import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    phone: { type: String },       // optional now
    password: { type: String },    
    address: { type: String },     
    country: { type: String },     
    city: { type: String },        
    gender: { type: String, enum: ["male", "female", "other"] }, // optional now
    dob: { type: Date },           
    otp: { type: String },
    otpExpires: { type: Date },
    isVerified: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
