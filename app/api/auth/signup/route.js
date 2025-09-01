import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";
import { connectIt } from "@/app/db/db";
import User from "../../../db/models/user";

export async function POST(req) {
    try {
        await connectIt();

        const { fullName, email, phone, password, address, country, city, gender, dob } = await req.json();

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Generate OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString();

        // Create new user
        const user = new User({
            fullName,
            email,
            phone,
            password: hashedPassword,
            address,
            country,
            city,
            gender,
            dob: new Date(dob),
            otp,
            otpExpires: new Date(Date.now() + 5 * 60 * 1000), // 5 minutes
            isVerified: false,
        });

        await user.save();

        // Send OTP email (try/catch separate)
        try {
            const transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 465,
                secure: true,
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
            });

            await transporter.sendMail({
                from: `"Libaas-e-Zauq" <${process.env.EMAIL_USER}>`,
                to: email,
                subject: "Your OTP Code",
                text: `Your OTP is ${otp}. It will expire in 5 minutes.`,
            });

            return NextResponse.json(
                { success: true, message: "User registered. OTP sent to email." },
                { status: 201 }
            );
        } catch (mailError) {
            console.error("Email Error:", mailError);
            return NextResponse.json(
                { success: true, message: "✅ User registered but OTP email failed. Please try again later." },
                { status: 201 }
            );
        }


    } catch (error) {
        console.error("Signup Error:", error);
        return NextResponse.json({ error: "Something went wrong", details: error.message }, { status: 500 });
    }
}
