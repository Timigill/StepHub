"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  FaBars,
  FaUser,
  FaAddressCard,
  FaInfoCircle,
  FaSignOutAlt,
  FaTrash,
} from "react-icons/fa";
import "./account.css";

export default function AccountPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [profileImage, setProfileImage] = useState(session?.user?.image || "");
  const [selectedSection, setSelectedSection] = useState("welcome");
  const [loading, setLoading] = useState(false);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "unauthenticated") {
    router.push("/lime-light/pages/login");
    return null;
  }

  // Upload image
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setProfileImage(ev.target.result);
      reader.readAsDataURL(file);
    }
  };

  // Delete account
  const handleDeleteAccount = async () => {
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

  // Content rendering
  const renderContent = () => {
    switch (selectedSection) {
      case "edit-profile":
        return <p>Edit your profile here...</p>;

      case "address":
        return <p>Manage your addresses here...</p>;

      case "account-detail":
        return (
          <>
            <p><strong>Name:</strong> {session?.user?.name}</p>
            <p><strong>Email:</strong> {session?.user?.email}</p>
          </>
        );

      case "logout":
        return (
          <>
            <p>Are you sure you want to logout?</p>
            <button
              className="logout-btn"
              onClick={() =>
                signOut({ callbackUrl: "/lime-light/pages/login" })
              }
            >
              Logout
            </button>
          </>
        );

      case "delete":
        return (
          <>
            <p>
              Deleting your account is permanent and cannot be undone.  
              Are you sure you want to continue?
            </p>
            <button
              className="delete-btn"
              onClick={handleDeleteAccount}
              disabled={loading}
            >
              {loading ? "Deleting..." : "Delete Account"}
            </button>
          </>
        );

      default:
        return <p>Welcome back, {session?.user?.name || "User"}!</p>;
    }
  };

  return (
    <div className="account-dashboard">
      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "" : "collapsed"}`}>
        <div className="menu-icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <FaBars />
        </div>

        {sidebarOpen && (
          <div className="expanded-sidebar">
            {/* Profile Section */}
            <div className="sidebar-profile">
              <div className="profile-image-wrapper">
                <img
                  src={profileImage || "/default-avatar.png"}
                  alt="Profile"
                  className="profile-image"
                />
                <label className="upload-icon">
                  +
                  <input type="file" onChange={handleImageUpload} />
                </label>
              </div>
              <h3>{session?.user?.name || "User Name"}</h3>
            </div>

            {/* Sidebar Buttons */}
            <div className="sidebar-buttons">
              <button
                className={selectedSection === "edit-profile" ? "active" : ""}
                onClick={() => setSelectedSection("edit-profile")}
              >
                <FaUser /> <span>Edit Profile</span>
              </button>
              <button
                className={selectedSection === "address" ? "active" : ""}
                onClick={() => setSelectedSection("address")}
              >
                <FaAddressCard /> <span>Address</span>
              </button>
              <button
                className={selectedSection === "account-detail" ? "active" : ""}
                onClick={() => setSelectedSection("account-detail")}
              >
                <FaInfoCircle /> <span>Account Details</span>
              </button>
              <button
                className={selectedSection === "logout" ? "active" : ""}
                onClick={() => setSelectedSection("logout")}
              >
                <FaSignOutAlt /> <span>Logout</span>
              </button>
              <button
                className={selectedSection === "delete" ? "active" : ""}
                onClick={() => setSelectedSection("delete")}
              >
                <FaTrash /> <span>Delete Account</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1>{selectedSection.toUpperCase()}</h1>
        {renderContent()}
      </div>
    </div>
  );
}
