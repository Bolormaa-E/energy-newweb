import React from "react";
import "./style.css";
import datas from "./datas.json";

export default function Links() {
  return (
      
    <div style={{ paddingBottom: 20, maxHeight: "100vh", overflowY: "scroll"}}>
      {datas.map((el, key) => (
        <div key={key} className="linksFlex">
          <div className="logo">
            <img alt={el.title} src={el.img} />
          </div>
          <a className="title" href={el.url}>{el.title.toUpperCase() }</a>
          </div>
      ))}
    </div>
  );
}
