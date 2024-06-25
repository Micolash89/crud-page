import React from "react";
import { Link } from "react-router-dom";

function ItemDashboard({ item: { id, icon, content, span, url } }) {
  return (
    <>
      <Link to={url} className="flexrow dashboard__a" id={`${id}`}>
        <div className="flexcolum">
          <i className={`${icon}`}></i>
          <span>{content}</span>
        </div>
        <span>{span}</span>
      </Link>
    </>
  );
}

export default ItemDashboard;
