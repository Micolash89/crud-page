import { useEffect, useState } from "react";
import "./mainHeader.css";
import { useLocation, useNavigate } from "react-router-dom";
import { themeDark, themeLigth } from "../../redux/features/ThemeSlice";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { menuOn } from "../../redux/features/MenuSlice";

function MainHeader() {
  const [filtro, setFiltro] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation().pathname;

  const themeValue = useSelector((state) => state.theme.state);
  const theme = useSelector((state) => state.theme.theme);

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

  const handleTheme = () => {
    if (themeValue) {
      dispatch(themeDark());
      Cookies.set("theme", "false", { expires: 30 });
    } else {
      dispatch(themeLigth());
      Cookies.set("theme", "true", { expires: 30 });
    }
  };

  useEffect(() => {
    const cookieTheme = Cookies.get("theme");
    if (cookieTheme == undefined) {
      Cookies.set("theme", "true", { expires: 30 });
      return;
    }

    if (cookieTheme.includes("false")) {
      dispatch(themeDark());
    }
  }, []);

  return (
    <>
      <section
        className={`main__section ${theme} ${
          location == "/login" ? "headerMainLocation" : ""
        }`}
      >
        <header className={`flexrow main__section--header headerMain `}>
          <button
            className="headerMain__button"
            onClick={() => {
              dispatch(menuOn());
            }}
          >
            <i className="ri-menu-line"></i>
          </button>

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
            <i
              className={`${
                themeValue ? "ri-sun-line" : "ri-moon-line"
              } headerMain__icon`}
              onClick={handleTheme}
            ></i>
          </div>
        </header>
      </section>
    </>
  );
}

export default MainHeader;
