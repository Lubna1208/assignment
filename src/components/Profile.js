import React from "react";

export default function Profile() {
  return (
    <div style={{border:"1px solid #ccc", borderRadius:"8px", padding:"20px", maxWidth:"500px"}}>
      <h2>Profile</h2>
      <img 
        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200" 
        alt="Profile" 
        style={{width:"120px", height:"120px", borderRadius:"50%", marginBottom:"10px"}} 
      />
      <p><strong>Full Name:</strong> Sophia Carter</p>
      <p><strong>Email:</strong> sophia.carter@example.com</p>
      <p><strong>Date Joined:</strong> March 12, 2023</p>
    </div>
  );
}
