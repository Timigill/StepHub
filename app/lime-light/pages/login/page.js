"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./login.css";
import { FaUser, FaLock, FaGoogle } from "react-icons/fa";

export default function LoginPage() {
  const [form, setForm] = useState({ identifier: "", password: "", agree: false });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.agree) return alert("⚠️ Please agree to the terms before login");

    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          identifier: form.identifier, // email or phone
          password: form.password
        }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("✅ " + data.message);
        // Optionally save token
        localStorage.setItem("token", data.token);
        router.push("/lime-light");
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
    <div className="login-container">
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-box">
            <FaUser className="icon" />
            <input
              type="text"
              required
              placeholder=" "
              value={form.identifier}
              onChange={(e) => setForm({ ...form, identifier: e.target.value })}
            />
            <label>Email or Phone Number</label>
          </div>

          <div className="input-box">
            <FaLock className="icon" />
            <input
              type="password"
              required
              placeholder=" "
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <label>Password</label>
          </div>

          <label className="login-checkbox">
            <input
              type="checkbox"
              checked={form.agree}
              onChange={(e) => setForm({ ...form, agree: e.target.checked })}
            />
            I agree to the terms
          </label>

          <button type="submit" className="login-button" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <button className="google-button">
          <FaGoogle style={{ marginRight: "8px", background:"transparent" }} />
          Continue with Google
        </button>

        <button
          onClick={() => router.push("/lime-light/pages/signup")}
          className="signup-button"
        >
          Create an Account
        </button>
      </div>
    </div>
  );
}
