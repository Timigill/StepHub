import { connectIt } from "../../../db/db"; // apne folder ke hisaab se sahi path do
import User from "../../../db/models/user"; // apne project ke hisaab se model ka path adjust karo
import { NextResponse } from "next/server";

export async function DELETE(req) {
  try {
    await connectIt(); // dbConnect nahi, connectIt use karo

    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const deletedUser = await User.findOneAndDelete({ email });

   if (!deletedUser) {
  return NextResponse.json(
    { message: "User not found in DB but session cleared" },
    { status: 200 }
  );
}

    return NextResponse.json(
      { message: "✅ Account deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Delete account error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
