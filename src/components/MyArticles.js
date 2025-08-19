import React, { useState } from "react";

const data = [
  { title: "The Art of Storytelling", status: "Published", edited: "2 days ago" },
  { title: "Crafting Compelling Characters", status: "Draft", edited: "1 week ago" },
  { title: "Mastering Dialogue", status: "Scheduled", edited: "2 weeks ago" },
  { title: "Scene Structure Basics", status: "Draft", edited: "3 weeks ago" },
  { title: "Plot Arcs that Work", status: "Published", edited: "1 month ago" },
];

export default function MyArticles() {
  const [page, setPage] = useState(1);
  const perPage = 2;
  const pages = Math.ceil(data.length / perPage);

  const pageItems = data.slice((page-1)*perPage, page*perPage);

  const badgeStyle = (status) => {
    if(status==="Published") return {background:"#d1fae5", color:"#065f46", padding:"4px 8px", borderRadius:"12px"};
    if(status==="Draft") return {background:"#fef3c7", color:"#92400e", padding:"4px 8px", borderRadius:"12px"};
    if(status==="Scheduled") return {background:"#e0f2fe", color:"#1e3a8a", padding:"4px 8px", borderRadius:"12px"};
    return {};
  };

  return (
    <div>
      <h2>My Articles</h2>
      <table border="1" cellPadding="8" style={{borderCollapse:"collapse", width:"100%", marginBottom:"10px"}}>
        <thead>
          <tr style={{background:"#f9fafb"}}>
            <th>Title</th>
            <th>Status</th>
            <th>Last Edited</th>
          </tr>
        </thead>
        <tbody>
          {pageItems.map((row,i)=>(
            <tr key={i}>
              <td>{row.title}</td>
              <td><span style={badgeStyle(row.status)}>{row.status}</span></td>
              <td>{row.edited}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <button disabled={page===1} onClick={()=>setPage(page-1)}>Prev</button>
        {Array.from({length:pages},(_,i)=>i+1).map(n=>(
          <button key={n} onClick={()=>setPage(n)} style={{fontWeight: page===n?"bold":"normal"}}>{n}</button>
        ))}
        <button disabled={page===pages} onClick={()=>setPage(page+1)}>Next</button>
      </div>
    </div>
  );
}
