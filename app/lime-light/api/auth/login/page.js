import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectDB from "@/db/db";
import User from "@/models/User";

export async function POST(req) {
  try {
    await connectDB();
    const { emailOrPhone, password } = await req.json();

    const user = await User.findOne({
      $or: [{ email: emailOrPhone }, { phone: emailOrPhone }],
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    if (!user.isVerified) {
      return NextResponse.json({ error: "Please verify your account first" }, { status: 403 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    return NextResponse.json({ message: "Login successful", userId: user._id });
  } catch (error) {
    return NextResponse.json({ error: "Login failed" }, { status: 500 });
  }
}
