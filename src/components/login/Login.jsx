import { useState } from "react";
import "./login.css";
import axios from "axios";
import { END_POINTS } from "../../service/endPoints";
import { useDispatch } from "react-redux";
import { loaderOff, loaderOn } from "../../redux/features/LoaderSlice";
import {
  messageError,
  messageOk,
} from "../../redux/features/NotificationSlice";
import { setSession } from "../../redux/features/UserSlice";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formaData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formaData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loaderOn());
    axios
      .post(`${END_POINTS.URL()}/api/session/login`, formaData, {})
      .then((response) => {
        dispatch(messageOk(response.data.message));
        dispatch(setSession(response.data.profesor));
        Cookies.set("crudCookieToken", response.data.token, {
          expires: 30,
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        dispatch(messageError(error.response.data.message));
      })
      .finally(() => {
        dispatch(loaderOff());
      });
  };

  return (
    <>
      <section className="flexcolum login loginSession">
        <button className="loginSession__home" onClick={() => navigate("/")}>
          <i className="ri-home-2-line"></i>
        </button>
        <section className="flexcolum login__container">
          <section className="flexcolum login__title">
            <h2 className="login__section--h2">OPERACIONES CRUD</h2>
            <div className="flexcolum login__section--div">
              <h3>inicio sesión</h3>
              <p>Ingrese sus credenciales para acceder a su cuenta</p>
            </div>
          </section>

          <section className="flexcolum login__section">
            <form
              onSubmit={handleSubmit}
              className="flexcolum login__section--form"
            >
              <label className="flexcolum" htmlFor="userInput__email__login">
                email
                <input
                  type="email"
                  name="email"
                  id="userInput__email__login"
                  placeholder="Enter your email"
                  onChange={handleChange}
                  value={formaData.email}
                />
              </label>

              <label className="flexcolum" htmlFor="password__login">
                Password
                <input
                  type="password"
                  name="password"
                  id="password__login"
                  placeholder="Enter your password"
                  onChange={handleChange}
                  value={formaData.password}
                />
              </label>

              <button type="submit">Inicio sesión</button>
            </form>

            <p>
              ¿Olvidaste tu contraseña? <a href="">Restablecer contraseña</a>
            </p>
          </section>
        </section>
      </section>
    </>
  );
}

export default Login;
