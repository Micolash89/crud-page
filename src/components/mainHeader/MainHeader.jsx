import React from "react";
import "./mainHeader.css";

function MainHeader() {
  return (
    <>
      <section className="main__section">
        <header className=" flexrow main__section--header headerMain">
          <button className="headerMain__button">
            <i className="ri-arrow-left-circle-line"></i>
          </button>

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
