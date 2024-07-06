import { useEffect, useState } from "react";
import "./profesorUpdate.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { loaderOff, loaderOn } from "../../redux/features/LoaderSlice";
import {
  messageError,
  messageOk,
} from "../../redux/features/NotificationSlice";
import { recargarActualizar } from "../../redux/features/RecargarSlice";
import { END_POINTS } from "../../service/endPoints";
import { profesorUpdateOff } from "../../redux/features/ProfesorUpdateSlice";
import Cookies from "js-cookie";

function ProfesorUpdate() {
  const dispatch = useDispatch();
  const profesorUpdateState = useSelector(
    (state) => state.profesorUpdate.state
  );
  const profesorUpdateValue = useSelector(
    (state) => state.profesorUpdate.value
  );

  const token = Cookies.get("crudCookieToken");

  const [formData, setFormData] = useState({
    id_profesor: "",
    nombre: "",
    apellido: "",
    email: "",
    telefono: 0,
    role: "",
    curso: "",
  });

  useEffect(() => {
    if (profesorUpdateState)
      setFormData({
        id_profesor: profesorUpdateValue.id_profesor,
        nombre: profesorUpdateValue.nombre,
        apellido: profesorUpdateValue.apellido,
        email: profesorUpdateValue.email,
        telefono: profesorUpdateValue.telefono,
        role: profesorUpdateValue.role,
        curso: profesorUpdateValue.nombre_curso,
      });
  }, [profesorUpdateState]);

  const handleSetForm = () => {
    dispatch(profesorUpdateOff());
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("entré en el handleSubmit");
    dispatch(loaderOn());

    axios
      .put(`${END_POINTS.URL()}/api/profesores/actualizar`, formData, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        dispatch(messageOk(response.data.message));
        dispatch(profesorUpdateOff());
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

  return (
    <>
      {profesorUpdateValue && (
        <section
          className={`flexcolum login profesorForm  ${
            profesorUpdateState ? "profesorUpdate" : "profesorUpdateActive"
          }`}
        >
          <div
            className="profesorForm__container--icon"
            onClick={handleSetForm}
          >
            <i className="ri-close-line"></i>
          </div>
          <section className="flexcolum login__container profesorForm__container">
            <section className="flexcolum login__title profesorForm__container--title pct">
              <h2 className="login__section--h2 pct__title">
                modificar Profesor
              </h2>
              {/* <div className="flexcolum login__section--div pct__infoTitle">
              <h3>sing in</h3>
              <p>Enter your credentials to access your account</p>
            </div> */}
            </section>

            <section className="flexcolum login__section profesorForm__formSection">
              <form
                onSubmit={handleSubmit}
                className="flexcolum login__section--form profesorForm__formSection--form "
              >
                <label className="flexcolum" htmlFor="nameInputUpdate">
                  nombre
                  <input
                    value={formData.nombre}
                    onChange={handleInputChange}
                    type="text"
                    name="nombre"
                    id="nameInputUpdate"
                    placeholder="roberto"
                  />
                </label>
                <label className="flexcolum" htmlFor="lastNameInputUpdate">
                  apellido
                  <input
                    value={formData.apellido}
                    onChange={handleInputChange}
                    type="text"
                    name="apellido"
                    id="lastNameInputUpdate"
                    placeholder="perez"
                  />
                </label>
                <label className="flexcolum" htmlFor="emailInputUpdate">
                  email
                  <input
                    value={formData.email}
                    onChange={handleInputChange}
                    type="email"
                    name="email"
                    id="emailInputUpdate"
                    placeholder="example@example"
                  />
                </label>
                <label className="flexcolum" htmlFor="phoneInputUpdate">
                  telefono
                  <input
                    value={formData.telefono}
                    onChange={handleInputChange}
                    type="tel"
                    name="telefono"
                    id="phoneInputUpdate"
                    placeholder="########"
                  />
                </label>

                <label className="flexcolum" htmlFor="curso__register">
                  <p>curso</p>

                  <input
                    onChange={handleInputChange}
                    value={formData.curso}
                    type="text"
                    name="curso"
                    id="curso__register"
                    placeholder="nodeJS"
                  />
                </label>

                <label className="flexcolum" htmlFor="role">
                  seleccione un rol:
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                  >
                    <option selected hidden>
                      Seleccione un Rol:
                    </option>
                    <option value="ADMIN">ADMIN</option>
                    <option value="PROFESOR">PROFESOR</option>
                  </select>
                </label>

                <button type="submit">Actualizar</button>
              </form>

              {/* <p>
              Forgot your password? <a href="">Reset Password</a>
            </p> */}
            </section>
          </section>
        </section>
      )}
    </>
  );
}

export default ProfesorUpdate;
