import React from "react";

export default function Profile() {
  return (
    <div className="profile-card">
      <img 
        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200" 
        alt="Profile" 
      />
      <div>
        <div className="field"><label>Full Name</label><div className="value">Sophia Carter</div></div>
        <div className="field"><label>Email</label><div className="value">sophia.carter@example.com</div></div>
        <div className="field"><label>Date Joined</label><div className="value">March 12, 2023</div></div>
      </div>
    </div>
  );
}
