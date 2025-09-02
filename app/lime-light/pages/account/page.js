"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "./account.css"; 

export default function AccountPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "unauthenticated") {
    router.push("/lime-light/pages/login");
    return null;
  }

  const handleDelete = async () => {
    if (!confirm("⚠️ Are you sure you want to delete your account?")) return;

    try {
      setLoading(true);
      const res = await fetch("/api/auth/delete-account", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: session?.user?.email }),
      });

      if (res.ok) {
        alert("✅ Account deleted successfully.");
        await signOut({ callbackUrl: "/lime-light/pages/signup" });
      } else {
        const data = await res.json();
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
    <div className="account-container">
      <h2>My Account</h2>

      <div className="user-info">
        <img
          src={session?.user?.image || "/default-avatar.png"}
          alt="User Avatar"
        />
        <p><strong style={{background:"transparent"}}>Name:</strong> {session?.user?.name}</p>
        <p><strong style={{background:"transparent"}}>Email:</strong> {session?.user?.email}</p>
      </div>

      <div className="buttons-container">
        <button
          className="logout-btn"
          onClick={() => signOut({ callbackUrl: "/lime-light/pages/login" })}
        >
          Logout
        </button>

        <button
          className="delete-btn"
          onClick={handleDelete}
          disabled={loading}
        >
          {loading ? "Deleting..." : "Delete"}
        </button>
      </div>
    </div>
  );
}
