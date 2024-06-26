import { useState } from "react";
import { alumnosFormOff } from "../../redux/features/AlumnoFormSlice";
import { useDispatch, useSelector } from "react-redux";
import { loaderOff, loaderOn } from "../../redux/features/LoaderSlice";
import axios from "axios";
import { END_POINTS } from "../../service/endPoints";
import {
  messageError,
  messageOk,
} from "../../redux/features/NotificationSlice";
import { recargarActualizar } from "../../redux/features/RecargarSlice";

function AlumnosForm() {
  const dispatch = useDispatch();
  const alumnoFormState = useSelector((state) => state.alumnoForm.state);

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    fecha_nacimiento: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSetForm = () => {
    dispatch(alumnosFormOff());
    setFormData({
      nombre: "",
      apellido: "",
      email: "",
      fecha_nacimiento: "",
      password: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("entré en el handleSubmit");
    dispatch(loaderOn());

    axios
      .post(`${END_POINTS.URL()}/api/alumnos/subir`, formData, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
        dispatch(messageOk(response.data.message));
        setFormData({
          nombre: "",
          apellido: "",
          email: "",
          fecha_nacimiento: "",
          password: "",
        });
        dispatch(alumnosFormOff());
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
      <section
        className={`flexcolum login profesorForm ${
          alumnoFormState ? "" : "profesorFormActive"
        }`}
      >
        <div className="profesorForm__container--icon" onClick={handleSetForm}>
          <i className="ri-close-line"></i>
        </div>
        <section className="flexcolum login__container profesorForm__container">
          <section className="flexcolum login__title profesorForm__container--title pct">
            <h2 className="login__section--h2 pct__title">ingresar Alumno</h2>
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
              <label className="flexcolum" htmlFor="nameInput__alu">
                nombre
                <input
                  value={formData.nombre}
                  onChange={handleInputChange}
                  type="text"
                  name="nombre"
                  id="nameInput__alu"
                  placeholder="roberto"
                />
              </label>
              <label className="flexcolum" htmlFor="lastNameInput__alu">
                apellido
                <input
                  value={formData.apellido}
                  onChange={handleInputChange}
                  type="text"
                  name="apellido"
                  id="lastNameInput__alu"
                  placeholder="perez"
                />
              </label>
              <label className="flexcolum" htmlFor="emailInput_alu">
                email
                <input
                  value={formData.email}
                  onChange={handleInputChange}
                  type="email"
                  name="email"
                  id="emailInput_alu"
                  placeholder="example@example"
                />
              </label>
              <label className="flexcolum" htmlFor="fecha_nac">
                fecha Nacimiento
                <input
                  value={formData.telefono}
                  onChange={handleInputChange}
                  type="date"
                  name="fecha_nacimiento"
                  id="fecha_nac"
                  placeholder="########"
                />
              </label>

              <label className="flexcolum" htmlFor="password__alu">
                Password
                <input
                  value={formData.password}
                  onChange={handleInputChange}
                  type="password"
                  name="password"
                  id="password__alu"
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

export default AlumnosForm;
