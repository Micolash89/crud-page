import React, { useState } from "react";
import "./mainHeader.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { END_POINTS } from "../../service/endPoints";
import {
  messageError,
  messageOk,
} from "../../redux/features/NotificationSlice";
import { loaderOff, loaderOn } from "../../redux/features/LoaderSlice";

function MainHeader() {
  const [filtro, setFiltro] = useState("");

  const dispatch = useDispatch();

  function handleSubmit() {
    if (!filtro.length) return;
    dispatch(loaderOn());
    axios
      .get(`${END_POINTS.URL()}/api/search/obtener/${filtro}`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
        dispatch(messageOk(response.data.message));
        setFiltro("");
      })
      .catch((error) => {
        console.log(error);
        dispatch(messageError(error.response.data.message));
      })
      .finally(() => {
        dispatch(loaderOff());
        window.scrollTo(0, 0);
      });
  }

  function handleFilter(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit();
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
              <i className="ri-search-line" onClick={handleSubmit}></i>
              <input
                placeholder="Search..."
                type="search"
                name=""
                id="filter"
                onKeyDown={handleFilter}
                onChange={(event) => setFiltro(event.target.value)}
                value={filtro}
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
