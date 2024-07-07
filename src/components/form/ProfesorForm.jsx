import { useDispatch, useSelector } from "react-redux";
import "./profesorForm.css";
import { profesorFormOff } from "../../redux/features/ProfesorFormSlice";
import { useState } from "react";
import {
  messageError,
  messageOk,
} from "../../redux/features/NotificationSlice";
import { loaderOff, loaderOn } from "../../redux/features/LoaderSlice";
import { recargarActualizar } from "../../redux/features/RecargarSlice";
import { postProfesores } from "../../service/axiosData";

function ProfesorForm() {
  const dispatch = useDispatch();
  const profesorFormState = useSelector((state) => state.profesorForm.state);

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: 0,
    password: "",
    curso: "",
    role: "",
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
      curso: "",
      role: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("entré en el handleSubmit");
    dispatch(loaderOn());

    postProfesores(formData)
      .then((response) => {
        console.log(response.data);
        dispatch(messageOk(response.data.message));
        setFormData({
          nombre: "",
          apellido: "",
          email: "",
          telefono: 0,
          password: "",
          curso: "",
          role: "",
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

  return (
    <>
      <section
        className={`flexcolum login profesorForm ${
          profesorFormState ? "" : "profesorFormActive"
        } profesor`}
      >
        <div className="profesorForm__container--icon" onClick={handleSetForm}>
          <i className="ri-close-line"></i>
        </div>
        <section className="flexcolum login__container profesorForm__container profesorForm__container2">
          <section className="flexcolum login__title profesorForm__container--title pct">
            <h2 className="login__section--h2 pct__title pct__title2">
              registrar Profesor
            </h2>
            {/* <div className="flexcolum login__section--div pct__infoTitle">
              <h3>sing in</h3>
              <p>Enter your credentials to access your account</p>
            </div> */}
          </section>

          <section className="flexcolum login__section profesorForm__formSection">
            <form
              onSubmit={handleSubmit}
              className="flexcolum login__section--form profesorForm__formSection--form pffsf pffsf2"
            >
              <label className="flexcolum" htmlFor="nameInput__register">
                nombre
                <input
                  value={formData.nombre}
                  onChange={handleInputChange}
                  type="text"
                  name="nombre"
                  id="nameInput__register"
                  placeholder="roberto"
                  autoComplete="given-name"
                />
              </label>
              <label className="flexcolum" htmlFor="lastNameInput__register">
                apellido
                <input
                  value={formData.apellido}
                  onChange={handleInputChange}
                  type="text"
                  name="apellido"
                  id="lastNameInput__register"
                  placeholder="perez"
                  autoComplete="family-name"
                />
              </label>
              <label className="flexcolum" htmlFor="emailInput__register">
                email
                <input
                  value={formData.email}
                  onChange={handleInputChange}
                  type="email"
                  name="email"
                  id="emailInput__register"
                  placeholder="example@example"
                  autoComplete="username"
                />
              </label>
              <label className="flexcolum" htmlFor="phoneInput__register">
                telefono
                <input
                  value={formData.telefono}
                  onChange={handleInputChange}
                  type="tel"
                  name="telefono"
                  id="phoneInput__register"
                  placeholder="########"
                  autoComplete="tel"
                />
              </label>

              <label className="flexcolum" htmlFor="password__password">
                Password
                <input
                  value={formData.password}
                  onChange={handleInputChange}
                  type="password"
                  name="password"
                  id="password__password"
                  placeholder="123456"
                  autoComplete="new-password"
                />
              </label>

              <label className="flexcolum" htmlFor="password__password2">
                repetir password
                <input
                  // onChange={handleInputChange}
                  type="password"
                  name="password"
                  id="password__password2"
                  placeholder="123456"
                  autoComplete="new-password"
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
                  autoComplete="off"
                />
              </label>

              {formData && (
                <label className="flexcolum" htmlFor="role">
                  seleccione un rol
                  <select
                    name="role"
                    defaultValue={formData.role}
                    onChange={handleInputChange}
                  >
                    <option value="" disabled>
                      Seleccione un Rol
                    </option>
                    <option value="ADMIN">ADMIN</option>
                    <option value="PROFESOR">PROFESOR</option>
                  </select>
                </label>
              )}

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
