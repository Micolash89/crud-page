import { useParams } from "react-router-dom";
import "./searchCard.css";
import { useEffect, useState } from "react";
import { getOneEntidad } from "../../service/axiosData";
import { loaderOff, loaderOn } from "../../redux/features/LoaderSlice";
import { messageError } from "../../redux/features/NotificationSlice";
import { useDispatch } from "react-redux";
import { fechaFormatoFull } from "../../service/fechaFormato";

function SearchCard() {
  const { id } = useParams();
  const { entidad } = useParams();
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const [dayNow, setDayNow] = useState(null);

  useEffect(() => {
    dispatch(loaderOn());

    getOneEntidad(entidad, id)
      .then((response) => {
        console.log("profesor----");
        setData(response.data.payload);

        if (entidad == "alumnos")
          setDayNow(fechaFormatoFull(data.fecha_nacimiento));
      })
      .catch((err) => {
        console.log(err);
        dispatch(messageError(err.data.response.message));
      })
      .finally(() => {
        dispatch(loaderOff());
      });
    console.log(data);
  }, []);

  useEffect(() => {
    if (!data || entidad == "profesores") return;
    setDayNow(fechaFormatoFull(data.fecha_nacimiento));
  }, [data]);

  return (
    <>
      {data && (
        <section className="flexrow searchCard ">
          <div className="flexrow">
            <section className=" flexcolum searchCard__section scProfile ">
              <div className="searchCard__section--img">
                <img src={data.url} alt="avatar profile" />
              </div>
              <div className="flexcolum searchCard__section--name">
                <h2>
                  {data.nombre} {data.apellido}
                </h2>
                <h3>
                  {entidad.slice(
                    0,
                    entidad.length - (entidad == "alumnos" ? 1 : 2)
                  )}
                </h3>
              </div>
              <div className="flexcolum searchCard__section--role">
                <span>
                  ID: {entidad == "alumnos" ? data.id_alumno : data.id_profesor}
                </span>
              </div>
            </section>
            <section
              className={`flexcolum searchCard__section scInfo ${
                entidad == "profesores" ? "scInfoProfesor" : ""
              }`}
            >
              <h4 className="searchCard__section---title">Detalles</h4>
              <div className="flexcolum searchCard__section---scInfo sssci">
                {dayNow && (
                  <p>
                    <i className="ri-cake-line"></i>
                    fecha de Nacimiento:
                    {dayNow && <span> {dayNow}</span>}
                  </p>
                )}
                {entidad == "profesores" && (
                  <>
                    <p>
                      <i className="ri-user-settings-line"></i> rol:{" "}
                      <span>{data.role}</span>
                    </p>

                    <p>
                      <i className="ri-phone-line"></i> telefono:{" "}
                      <span>{data.telefono}</span>
                    </p>
                  </>
                )}
                <p>
                  <i className="ri-school-line"></i> curso:{" "}
                  <span>{data.nombre_curso}</span>
                </p>
                <p>
                  <i className="ri-mail-line"></i>Email:{" "}
                  <span>{data.email}</span>
                </p>
                <p>
                  <i
                    className={
                      data.estado
                        ? `ri-checkbox-circle-line`
                        : "ri-close-circle-line"
                    }
                  ></i>
                  Estado:{" "}
                  <span
                    className={`${data.estado ? "altaClass" : "bajaClass"}`}
                  >
                    {data.estado ? " ALTA" : " BAJA"}
                  </span>
                </p>
              </div>
            </section>
          </div>
        </section>
      )}
    </>
  );
}

export default SearchCard;
