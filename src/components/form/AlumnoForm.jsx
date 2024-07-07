import { useEffect, useState } from "react";
import { alumnosFormOff } from "../../redux/features/AlumnoFormSlice";
import { useDispatch, useSelector } from "react-redux";
import { loaderOff, loaderOn } from "../../redux/features/LoaderSlice";
import {
  messageError,
  messageOk,
} from "../../redux/features/NotificationSlice";
import { recargarActualizar } from "../../redux/features/RecargarSlice";
import { getListaCursos, postAlumnos } from "../../service/axiosData";

function AlumnosForm() {
  const dispatch = useDispatch();
  const alumnoFormState = useSelector((state) => state.alumnoForm.state);

  const [cursosData, setCursosData] = useState(null);

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    fecha_nacimiento: "",
    id_curso: 0,
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
      id_curso: 0,
    });
  };

  const getCursos = () => {
    getListaCursos()
      .then((response) => {
        setCursosData(response.data.payload);
      })
      .catch(() => {
        dispatch(messageError("Error al obtener los cursos"));
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loaderOn());

    postAlumnos(formData)
      .then((response) => {
        console.log(response.data);
        dispatch(messageOk(response.data.message));
        setFormData({
          nombre: "",
          apellido: "",
          email: "",
          fecha_nacimiento: "",
          id_curso: 0,
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

  useEffect(() => {
    getCursos();
    console.log(cursosData);
  }, []);

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

              <label className="flexcolum" htmlFor="curso">
                seleccione un curso
                <select
                  name="id_curso"
                  // value={formData.id_curso}
                  defaultValue={formData.id_curso}
                  onChange={handleInputChange}
                >
                  <option disabled value={""}>
                    Seleccione un curso
                  </option>
                  {cursosData &&
                    cursosData.map((item, index) => {
                      return (
                        <option
                          value={item.id_curso}
                          key={`${index}__cursos__option`}
                        >
                          {item.nombre_curso} - {item.nombre_profesor}{" "}
                          {item.apellido}
                        </option>
                      );
                    })}
                </select>
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
