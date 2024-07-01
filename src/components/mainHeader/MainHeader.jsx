import { useState } from "react";
import "./mainHeader.css";
import { Link, useNavigate } from "react-router-dom";

function MainHeader() {
  const [filtro, setFiltro] = useState("");

  const navigate = useNavigate();

  function handleRedirect() {
    if (!filtro.length || filtro.length < 2) return;
    navigate(`/search/${filtro}`);
  }

  function handleFilter(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      handleRedirect();
    }
  }

  return (
    <>
      <section className="main__section">
        <header className=" flexrow main__section--header headerMain">
          <Link to={"/"} className="headerMain__button">
            <i className="ri-arrow-left-circle-line"></i>
          </Link>

          <div className="flexrow headerMain__search">
            <label htmlFor="filter" className=" flexrow headerMain__label">
              <i className="ri-search-line" onClick={handleFilter}></i>
              <input
                placeholder="buscar..."
                type="search"
                name=""
                id="filter"
                onKeyDown={handleFilter}
                onChange={(event) => setFiltro(event.target.value)}
                value={filtro}
                minLength={2}
                min={2}
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
