"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { 
  FaUser, FaEnvelope, FaLock, FaPhone, FaHome, FaGlobe, FaCity, 
  FaVenusMars, FaBirthdayCake 
} from "react-icons/fa";
import "./signup.css";

export default function SignupPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    address: "",
    country: "",
    city: "",
    gender: "",
    dob: "",
    agree: false,
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.agree) {
      alert("⚠️ Please agree to the Terms & Conditions");
      return;
    }
    setLoading(true);

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        alert("✅ " + data.message);
        localStorage.setItem("verifyEmail", form.email);
        router.push(`/lime-light/pages/verify?email=${encodeURIComponent(form.email)}`);
      } else {
        alert("❌ " + data.error);
      }
    } catch (err) {
      console.error(err);
      alert("❌ Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div>
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          {/* Full Name */}
          <div className="input-box">
            <FaUser className="icon" />
            <input
              type="text"
              placeholder=" "
              required
              value={form.fullName}
              onChange={(e) => setForm({ ...form, fullName: e.target.value })}
            />
            <label>Full Name</label>
          </div>

          {/* Email + Password */}
          <div className="row double">
            <div className="input-box">
              <FaEnvelope className="icon" />
              <input
                type="email"
                placeholder=" "
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <label>Email</label>
            </div>
            <div className="input-box">
              <FaLock className="icon" />
              <input
                type="password"
                placeholder=" "
                required
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
              <label>Password</label>
            </div>
          </div>

          {/* Phone */}
          <div className="input-box">
            <FaPhone className="icon" />
            <input
              type="tel"
              placeholder=" "
              required
              value={form.phone}
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value.replace(/\D/g, "") })
              }
            />
            <label>Phone Number</label>
          </div>

          {/* Address */}
          <div className="input-box">
            <FaHome className="icon" />
            <input
              type="text"
              placeholder=" "
              required
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
            />
            <label>Address</label>
          </div>

          {/* Gender + DOB */}
          <div className="row double">
            <div className="input-box">
              <FaVenusMars className="icon" />
              <select
                required
                value={form.gender}
                onChange={(e) => setForm({ ...form, gender: e.target.value })}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <label>Gender</label>
            </div>
            <div className="input-box">
              <FaBirthdayCake className="icon" />
              <input
                type="date"
                required
                value={form.dob}
                onChange={(e) => setForm({ ...form, dob: e.target.value })}
              />
              <label>Date of Birth</label>
            </div>
          </div>

          {/* Country + City */}
          <div className="row double">
            <div className="input-box">
              <FaGlobe className="icon" />
              <select
                required
                value={form.country}
                onChange={(e) => setForm({ ...form, country: e.target.value })}
              >
                <option value="">Select Country</option>
                <option value="Pakistan">Pakistan</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="India">India</option>
              </select>
              <label>Country</label>
            </div>
            <div className="input-box">
              <FaCity className="icon" />
              <select
                required
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
              >
                <option value="">Select City</option>
                {form.country === "Pakistan" && (
                  <>
                    <option value="Karachi">Karachi</option>
                    <option value="Lahore">Lahore</option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="Faisalabad">Faisalabad</option>
                  </>
                )}
                {form.country === "USA" && (
                  <>
                    <option value="New York">New York</option>
                    <option value="Los Angeles">Los Angeles</option>
                    <option value="Chicago">Chicago</option>
                  </>
                )}
                {form.country === "UK" && (
                  <>
                    <option value="London">London</option>
                    <option value="Manchester">Manchester</option>
                    <option value="Liverpool">Liverpool</option>
                  </>
                )}
                {form.country === "India" && (
                  <>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Bangalore">Bangalore</option>
                  </>
                )}
              </select>
              <label>City</label>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div
            className="terms"
            onClick={() => setForm({ ...form, agree: !form.agree })}
            style={{ cursor: "pointer" }}
          >
            <input
              type="checkbox"
              checked={form.agree}
              onChange={(e) => setForm({ ...form, agree: e.target.checked })}
              onClick={(e) => e.stopPropagation()} 
            />
            <label>I agree to the Terms & Conditions</label>
          </div>

          {/* Sign Up Button */}
          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        {/* Sign in with Google */}
        <button
          type="button"
          className="google-button"
          onClick={() => signIn("google", { callbackUrl: "/lime-light" })}
        >
          <i className="fab fa-google"></i> Sign up with Google
        </button>

        {/* Already have account */}
        <p className="login-link">
          Already have an account?{" "}
          <span onClick={() => router.push("/lime-light/pages/login")}>Login</span>
        </p>
      </div>
    </div>
  );
}
