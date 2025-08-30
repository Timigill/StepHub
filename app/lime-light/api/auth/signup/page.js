import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectDB from "@/db/db";

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const { fullName, email, phone, password } = body;

    if (!email && !phone) {
      return NextResponse.json({ error: "Email or Phone required" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // random otp
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    const user = new User({
      fullName,
      email,
      phone,
      password: hashedPassword,
      otp,
    });
    await user.save();

    // TODO: send otp via email/sms (abhi console me show karte hain)
    console.log("OTP for", email || phone, ":", otp);

    return NextResponse.json({ message: "Signup successful, verify OTP" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Signup failed" }, { status: 500 });
  }
}
