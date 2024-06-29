import { useDispatch, useSelector } from "react-redux";
import "./profesorForm.css";
import { profesorFormOff } from "../../redux/features/ProfesorFormSlice";
import { useEffect, useState } from "react";
import {
  messageError,
  messageOk,
} from "../../redux/features/NotificationSlice";
import { END_POINTS } from "../../service/endPoints";
import axios from "axios";
import { loaderOff, loaderOn } from "../../redux/features/LoaderSlice";
import { recargarActualizar } from "../../redux/features/RecargarSlice";

function ProfesorForm() {
  const dispatch = useDispatch();
  const profesorFormState = useSelector((state) => state.profesorForm.state);

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

  const handleSetForm = () => {
    dispatch(profesorFormOff());
    setFormData({
      nombre: "",
      apellido: "",
      email: "",
      telefono: 0,
      password: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("entré en el handleSubmit");
    dispatch(loaderOn());

    axios
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
        dispatch(profesorFormOff());
        dispatch(recargarActualizar());
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

  //dispatch(profesorFormOff());
  //dispatch(profesorFormOn());

  return (
    <>
      <section
        className={`flexcolum login profesorForm ${
          profesorFormState ? "" : "profesorFormActive"
        }`}
      >
        <div className="profesorForm__container--icon" onClick={handleSetForm}>
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
                  value={formData.nombre}
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
                  value={formData.apellido}
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
                  value={formData.email}
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
                  value={formData.telefono}
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
                  value={formData.password}
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
