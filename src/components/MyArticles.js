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

  const badgeClass = (status) => {
    if(status==="Published") return "pill pill-green";
    if(status==="Draft") return "pill pill-yellow";
    if(status==="Scheduled") return "pill pill-blue";
    return "";
  }

  return (
    <div>
      <h2>My Articles</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
              <th>Last Edited</th>
            </tr>
          </thead>
          <tbody>
            {pageItems.map((row,i)=>(
              <tr key={i}>
                <td>{row.title}</td>
                <td><span className={badgeClass(row.status)}>{row.status}</span></td>
                <td>{row.edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <button disabled={page===1} onClick={()=>setPage(page-1)}>Prev</button>
        {Array.from({length:pages},(_,i)=>i+1).map(n=>(
          <button key={n} className={page===n ? "current" : ""} onClick={()=>setPage(n)}>{n}</button>
        ))}
        <button disabled={page===pages} onClick={()=>setPage(page+1)}>Next</button>
      </div>
    </div>
  );
}
