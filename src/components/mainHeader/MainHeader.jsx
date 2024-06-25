import React from "react";
import "./mainHeader.css";
import { Link } from "react-router-dom";

function MainHeader() {
  return (
    <>
      <section className="main__section">
        <header className=" flexrow main__section--header headerMain">
          <Link to={"/"} className="headerMain__button">
            <i className="ri-arrow-left-circle-line"></i>
          </Link>

          <div className="flexrow headerMain__search">
            <label htmlFor="filter" className=" flexrow headerMain__label">
              <i className="ri-search-line"></i>
              <input
                placeholder="Search..."
                type="search"
                name=""
                id="filter"
              />
            </label>
            <i className="ri-notification-2-line headerMain__icon"></i>
          </div>
        </header>
      </section>
    </>
  );
}

export default MainHeader;
