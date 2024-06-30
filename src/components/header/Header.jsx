import { useDispatch } from "react-redux";
import "./header.css";
import { Link } from "react-router-dom";
import { recargarActualizar } from "../../redux/features/RecargarSlice";

function Header() {
  const dispatch = useDispatch();

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
      <header className="flexcolum header">
        <h1 className="header__h1"> CRUD operaciones</h1>
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

        <a href="" className="flexrow header__logout">
          <span>Logout</span>
          <i className="ri-logout-box-r-line"></i>
        </a>
      </header>
    </>
  );
}

export default Header;
