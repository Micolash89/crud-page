import { useDispatch, useSelector } from "react-redux";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { recargarActualizar } from "../../redux/features/RecargarSlice";
import { logOutSession, setSession } from "../../redux/features/UserSlice";
import { useEffect } from "react";
import axios from "axios";
import { END_POINTS } from "../../service/endPoints";
import Cookies from "js-cookie";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOutSession());
    Cookies.remove("crudCookieToken");
    navigate("/login");
  };

  const sessionState = useSelector((state) => state.user.session);
  const sessionUser = useSelector((state) => state.user.user);
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    const cookieToken = Cookies.get("crudCookieToken");

    if (!cookieToken) return;

    axios
      .get(`${END_POINTS.URL()}/api/session/current`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${cookieToken}`,
        },
      })
      .then((response) => {
        dispatch(setSession(response.data.profesor));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const itemsHeader = [
    {
      name: "Home",
      link: "/",
      icon: "ri-home-4-line",
    },
    {
      name: "profesores",
      link: "/profesores",
      icon: "ri-briefcase-line",
    },
    {
      name: "alumnos",
      link: "/alumnos",
      icon: "ri-graduation-cap-line",
    },
    {
      name: "cursos",
      link: "/cursos",
      icon: "ri-file-list-line",
    },
    {
      name: "Perfil",
      link: "/perfil",
      icon: "ri-sound-module-line",
    },
  ];

  return (
    <>
      <header className={`flexcolum header ${theme}`}>
        <h1 className="header__h1"> CRUD operaciones</h1>
        {sessionState && (
          <section className="flexcolum header__section">
            <div className="picture_profile">
              <img
                className="header__section--img"
                src={sessionUser.url}
                alt="avatar"
              />
            </div>
            <span className="header__section--span">
              {sessionUser.nombre} {sessionUser.apellido}
            </span>
            <span className="header__section--span">{sessionUser.role}</span>
          </section>
        )}

        <nav className="header__nav">
          <ul className="flexcolum header__nav--ul">
            {itemsHeader.map((item, index) => {
              return (
                <li
                  key={`${index} itemsHeader`}
                  className="header__items"
                  onClick={() => dispatch(recargarActualizar())}
                >
                  <Link to={item.link} className="flexrow">
                    <span>{item.name}</span>
                    <i className={`${item.icon}`}></i>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {sessionState ? (
          <button onClick={handleLogout} className="flexrow header__logout">
            <i className="ri-logout-box-r-line"></i>
            <span>Salir</span>
          </button>
        ) : (
          <Link to={"/login"} className="flexrow header__logout">
            <i className="ri-user-line"></i>
            <span>Inicio Session</span>
          </Link>
        )}
      </header>
    </>
  );
}

export default Header;
