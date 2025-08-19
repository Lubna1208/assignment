import React from "react";
import { FaUser, FaFileAlt, FaBars } from "react-icons/fa"; // Using react-icons for simplicity

export default function Sidebar({ collapsed = false, active = "profile", onNavigate = () => {}, onToggle = () => {} }) {
  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        {!collapsed && <strong>Author Dashboard</strong>}
        <button onClick={onToggle}>
          {collapsed ? <FaBars /> : "‹"}
        </button>
      </div>

      <nav className="nav">
        <button
          className={active==="profile" ? "active" : ""}
          onClick={() => onNavigate("profile")}
          title="Profile"
        >
          <FaUser />
          {!collapsed && "Profile"}
        </button>
        <button
          className={active==="articles" ? "active" : ""}
          onClick={() => onNavigate("articles")}
          title="My Articles"
        >
          <FaFileAlt />
          {!collapsed && "My Articles"}
        </button>
      </nav>
    </aside>
  );
}
