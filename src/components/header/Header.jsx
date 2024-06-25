import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  const itemsHeader = [
    {
      name: "Home",
      link: "/",
      icon: "ri-home-4-line",
    },
    {
      name: "Course",
      link: "/table",
      icon: "ri-star-line",
    },
    {
      name: "Payment",
      link: "/table2",
      icon: "ri-graduation-cap-line",
    },
    {
      name: "Report",
      link: "/login",
      icon: "ri-file-chart-line",
    },
    {
      name: "Settings",
      link: "/",
      icon: "ri-sound-module-line",
    },
  ];

  return (
    <>
      <header className="flexcolum header">
        <h1 className="header__h1"> CRUD OPERATIONS</h1>
        <section className="flexcolum header__section">
          <div className="picture_profile">
            <img
              className="header__section--img"
              src="images/pablo.png"
              alt="avatar"
            />
          </div>
          <span className="header__section--span">Karthi Madesh</span>
          <span className="header__section--span">Admin</span>
        </section>

        <nav className="header__nav">
          <ul className="flexcolum header__nav--ul">
            {itemsHeader.map((item, index) => {
              return (
                <li key={`${index} itemsHeader`} className="header__items">
                  <Link to={item.link} className="flexrow">
                    <span>{item.name}</span>
                    <i className={`${item.icon}`}></i>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <a href="" className="flexrow header__logout">
          <span>Logout</span>
          <i className="ri-logout-box-r-line"></i>
        </a>
      </header>
    </>
  );
}

export default Header;
