import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
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
            <li className="header__items">
              <Link to={"/"} className="flexrow">
                <span>Home</span>
                <i className="ri-home-4-line"></i>
              </Link>
            </li>
            <li className="header__items">
              <Link to={"/table"} className="flexrow">
                <span>Course</span>
                <i className="ri-star-line"></i>
              </Link>
            </li>
            <li className="header__items">
              <Link to={"/table2"} className="flexrow">
                <span>Payment</span>
                <i className="ri-graduation-cap-line"></i>
              </Link>
            </li>
            <li className="header__items">
              <Link to="/login" className="flexrow">
                <span>Report</span>
                <i className=" ri-file-chart-line"></i>
              </Link>
            </li>
            <li className="header__items">
              <a href=" " className="flexrow">
                <span>Settings</span>
                <i className=" ri-sound-module-line"></i>
              </a>
            </li>
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
