"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FaKey } from "react-icons/fa";
import "./verify.css";

export default function VerifyPage() {
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get email from query params or localStorage
  useEffect(() => {
    const emailFromParam = searchParams.get("email");
    const savedEmail = localStorage.getItem("verifyEmail");

    if (emailFromParam) {
      setEmail(emailFromParam);
      localStorage.setItem("verifyEmail", emailFromParam); 
    } else if (savedEmail) {
      setEmail(savedEmail);
    } else {
      alert("❌ No email found. Please signup again.");
      router.push("/lime-light/pages/signup");
    }
  }, [searchParams, router]);

  // Handle OTP verification
  const handleVerify = async (e) => {
    e.preventDefault();
    if (!email) return alert("❌ Email is missing! Please reload the page.");
    if (otp.length !== 6) return alert("❌ OTP must be 6 digits");

    setLoading(true);

    try {
      const res = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const data = await res.json();

      if (res.status === 200) {
        alert("✅ " + data.message);
        localStorage.removeItem("verifyEmail"); // cleanup
        router.push("/lime-light/pages/login");
      } else {
        alert("❌ " + data.error);
      }
    } catch (err) {
      console.error("Verify error:", err);
      alert("❌ Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  // Handle resend OTP
  const handleResend = async () => {
    if (!email) return alert("❌ Email is missing!");
    try {
      const res = await fetch("/api/auth/resend-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.status === 200) alert("📩 " + data.message);
      else alert("❌ " + data.error);
    } catch (err) {
      console.error("Resend OTP error:", err);
      alert("❌ Something went wrong while resending OTP!");
    }
  };

  return (
    <div className="verify-container">
      <div className="verify-card">
        <h2>Verify Your Account</h2>
        <p className="verify-subtext">
          We sent an OTP to <b>{email || "loading..."}</b>. Enter it below:
        </p>

        <form onSubmit={handleVerify} className="verify-form">
          <div className="input-box">
            <input
              type="text"
              placeholder=" "
              required
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
              maxLength={6}
            />
            <label>
              <FaKey style={{ marginRight: "6px" }} /> Enter OTP
            </label>
          </div>

          <button
            type="submit"
            className="verify-button"
            disabled={loading || !email}
          >
            {loading ? "Verifying..." : "Verify"}
          </button>
        </form>

        <p className="resend-text">
          Didn’t receive the code?{" "}
          <span onClick={handleResend} className="resend-link">
            Resend OTP
          </span>
        </p>
      </div>
    </div>
  );
}
