import { NextResponse } from "next/server";
import connectDB from "@/db/db";
import User from "@/models/User";

export async function POST(req) {
  try {
    await connectDB();
    const { otp } = await req.json();

    const user = await User.findOne({ otp });
    if (!user) {
      return NextResponse.json({ error: "Invalid OTP" }, { status: 400 });
    }

    user.isVerified = true;
    user.otp = null;
    await user.save();

    return NextResponse.json({ message: "Account verified successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Verification failed" }, { status: 500 });
  }
}
