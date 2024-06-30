import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { END_POINTS } from "../service/endPoints";
import axios from "axios";
import { loaderOff, loaderOn } from "../redux/features/LoaderSlice";
import { messageError, messageOk } from "../redux/features/NotificationSlice";
import { recargarActualizar } from "../redux/features/RecargarSlice";
import { alumnoUpdateOff } from "../redux/features/AlumnoUpdateSlice";

function AlumnosUpdate() {
  const dispatch = useDispatch();
  const alumnoUpdateState = useSelector((state) => state.alumnoUpdate.state);
  const alumnoUpdateValue = useSelector((state) => state.alumnoUpdate.value);

  const [formData, setFormData] = useState({
    id_alumno: "",
    nombre: "",
    apellido: "",
    email: "",
    fecha_nacimiento: "",
  });

  const formatDateToInput = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    if (!alumnoUpdateState) return;

    setFormData({
      id_alumno: alumnoUpdateValue.id_alumno,
      nombre: alumnoUpdateValue.nombre,
      apellido: alumnoUpdateValue.apellido,
      email: alumnoUpdateValue.email,
      fecha_nacimiento: formatDateToInput(alumnoUpdateValue.fecha_nacimiento),
    });
  }, [alumnoUpdateState]);

  const handleSetForm = () => {
    dispatch(alumnoUpdateOff());
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
      .put(`${END_POINTS.URL()}/api/alumnos/actualizar`, formData, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
        dispatch(messageOk(response.data.message));
        dispatch(alumnoUpdateOff());
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
      {alumnoUpdateValue && (
        <section
          className={`flexcolum login profesorForm  ${
            alumnoUpdateState ? "profesorUpdate" : "profesorUpdateActive"
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
                modificar Alumno
              </h2>
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
                <label className="flexcolum" htmlFor="nameInputUpdate__alu">
                  nombre
                  <input
                    value={formData.nombre}
                    onChange={handleInputChange}
                    type="text"
                    name="nombre"
                    id="nameInputUpdate__alu"
                    placeholder="roberto"
                  />
                </label>
                <label className="flexcolum" htmlFor="lastNameInputUpdate__alu">
                  apellido
                  <input
                    value={formData.apellido}
                    onChange={handleInputChange}
                    type="text"
                    name="apellido"
                    id="lastNameInputUpdate__alu"
                    placeholder="perez"
                  />
                </label>
                <label className="flexcolum" htmlFor="emailInputUpdate__alu">
                  email
                  <input
                    value={formData.email}
                    onChange={handleInputChange}
                    type="email"
                    name="email"
                    id="emailInputUpdate__alu"
                    placeholder="example@example"
                  />
                </label>
                <label className="flexcolum" htmlFor="dateInputUpdate__alu">
                  fecha de nacimiento
                  <input
                    value={formData.fecha_nacimiento}
                    onChange={handleInputChange}
                    type="date"
                    name="fecha_nacimiento"
                    id="dateInputUpdate__alu"
                    placeholder="########"
                  />
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

export default AlumnosUpdate;
