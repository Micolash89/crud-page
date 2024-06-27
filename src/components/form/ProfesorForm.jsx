import { useDispatch, useSelector } from "react-redux";
import "./profesorForm.css";
import { profesorFormOff } from "../../redux/features/ProfesorForm";
import { useState } from "react";
import {
  messageError,
  messageOk,
} from "../../redux/features/NotificationSlice";
import { END_POINTS } from "../../service/endPoints";
import axios from "axios";
import { loaderOff, loaderOn } from "../../redux/features/LoaderSlice";

function ProfesorForm() {
  const profesorFormState = useSelector((state) => state.profesorForm.state);
  const [data, setData] = useState("");

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: 0,
    password: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("entré en el handleSubmit");
    dispatch(loaderOn());

    await axios
      .post(`${END_POINTS.URL()}/api/profesores/subir`, formData, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
        dispatch(messageOk(response.data.message));
        setFormData({
          nombre: "",
          apellido: "",
          email: "",
          telefono: 0,
          password: "",
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch(messageError(error.response.data.message));
      })
      .finally(() => {
        dispatch(loaderOff());
        window.scrollTo(0, 0);
      });
  };

  const dispatch = useDispatch();

  //dispatch(profesorFormOff());
  //dispatch(profesorFormOn());

  return (
    <>
      <section
        className={`flexcolum login profesorForm ${
          profesorFormState ? "" : "profesorFormActive"
        }`}
      >
        <div
          className="profesorForm__container--icon"
          onClick={() => {
            dispatch(profesorFormOff());
          }}
        >
          <i className="ri-close-line"></i>
        </div>
        <section className="flexcolum login__container profesorForm__container">
          <section className="flexcolum login__title profesorForm__container--title pct">
            <h2 className="login__section--h2 pct__title">ingresar Profesor</h2>
            {/* <div className="flexcolum login__section--div pct__infoTitle">
              <h3>sing in</h3>
              <p>Enter your credentials to access your account</p>
            </div> */}
          </section>

          <section className="flexcolum login__section profesorForm__formSection">
            <form
              onSubmit={handleSubmit}
              className="flexcolum login__section--form profesorForm__formSection--form pffsf"
            >
              <label className="flexcolum" htmlFor="nameInput">
                nombre
                <input
                  onChange={handleInputChange}
                  type="text"
                  name="nombre"
                  id="nameInput"
                  placeholder="roberto"
                />
              </label>
              <label className="flexcolum" htmlFor="lastNameInput">
                apellido
                <input
                  onChange={handleInputChange}
                  type="text"
                  name="apellido"
                  id="lastNameInput"
                  placeholder="perez"
                />
              </label>
              <label className="flexcolum" htmlFor="emailInput">
                email
                <input
                  onChange={handleInputChange}
                  type="email"
                  name="email"
                  id="emailInput"
                  placeholder="example@example"
                />
              </label>
              <label className="flexcolum" htmlFor="phoneInput">
                telefono
                <input
                  onChange={handleInputChange}
                  type="tel"
                  name="telefono"
                  id="phoneInput"
                  placeholder="########"
                />
              </label>

              <label className="flexcolum" htmlFor="password">
                Password
                <input
                  onChange={handleInputChange}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="123456"
                />
              </label>

              <button type="submit">registrar</button>
            </form>

            {/* <p>
              Forgot your password? <a href="">Reset Password</a>
            </p> */}
          </section>
        </section>
      </section>
    </>
  );
}

export default ProfesorForm;
