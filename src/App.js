import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MyArticles from "./components/MyArticles";
import Profile from "./components/Profile";

function App() {
  const [active, setActive] = useState("profile");
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div style={{display:"flex", minHeight:"100vh"}}>
      <Sidebar collapsed={collapsed} active={active} onNavigate={setActive} onToggle={()=>setCollapsed(c=>!c)} />
      <main style={{flex:1, padding:"20px"}}>
        {active==="profile" ? <Profile/> : <MyArticles/>}
      </main>
    </div>
  );
}

export default App;
