import React from "react";

export default function Sidebar({ collapsed = false, active = "profile", onNavigate = () => {}, onToggle = () => {} }) {
  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`} style={{border:"1px solid #ccc", padding:"10px", width: collapsed ? "80px" : "200px"}}>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        {!collapsed && <strong>Author Dashboard</strong>}
        <button onClick={onToggle}>{collapsed ? "›" : "‹"}</button>
      </div>
      
      <nav style={{marginTop:"10px"}}>
        <button style={{display:"block", width:"100%", textAlign:"left", background: active==="profile"?"#eee":"transparent"}} onClick={() => onNavigate("profile")}>
          Profile
        </button>
        <button style={{display:"block", width:"100%", textAlign:"left", background: active==="articles"?"#eee":"transparent"}} onClick={() => onNavigate("articles")}>
          My Articles
        </button>
      </nav>
    </aside>
  );
}
