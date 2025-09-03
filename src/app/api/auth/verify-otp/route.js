import { NextResponse } from "next/server";
import { connectIt } from "../../../db/db";
import User from "../../../db/models/user";

export async function POST(req) {
  try {
    await connectIt();

    const { email, otp } = await req.json();
    if (!email || !otp) {
      return NextResponse.json({ error: "Email and OTP are required" }, { status: 400 });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 400 });
    }

    if (String(user.otp) !== String(otp) || user.otpExpires < new Date()) {
      return NextResponse.json({ error: "Invalid or expired OTP" }, { status: 400 });
    }

    // Mark user as verified
    user.isVerified = true;
    user.otp = null;
    user.otpExpires = null;
    await user.save();

    return NextResponse.json({ message: "Account verified successfully" }, { status: 200 });

  } catch (err) {
    console.error("Verify API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
