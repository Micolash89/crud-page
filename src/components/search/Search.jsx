import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { loaderOff, loaderOn } from "../../redux/features/LoaderSlice";
import axios from "axios";
import { END_POINTS } from "../../service/endPoints";
import {
  messageError,
  messageOk,
} from "../../redux/features/NotificationSlice";
import RowSearchProfesor from "./RowSearchProfesor";
import RowSearchAlumno from "./RowSearchAlumno";

function Search() {
  const [dataProfesores, setDataProfesores] = useState([]);
  const [dataAlumnos, setDataAlumnos] = useState([]);

  const listHeaderProfesores = [
    "ID profesor",
    "nombre Apellido",
    "curso",
    "telefono",
    "email",
    "estado",
    "",
  ];

  const listHeaderAlumnos = [
    "ID alumno",
    "nombre apellido",
    "email",
    "fecha de nacimiento",
    "estado",
    "",
  ];

  const { filtro } = useParams();

  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(loaderOn());
    axios
      .get(`${END_POINTS.URL()}/api/search/obtener/${filtro}`, {
        withCredentials: true,
      })
      .then((response) => {
        dispatch(messageOk(response.data.message));
        setDataProfesores(response.data.payload.profesores.payload);
        setDataAlumnos(response.data.payload.alumnos.payload);
      })
      .catch((error) => {
        console.log(error);
        dispatch(messageError(error.response.data.message));
      })
      .finally(() => {
        dispatch(loaderOff());
        window.scrollTo(0, 0);
      });
  }

  useEffect(() => {
    if (!filtro) return;
    handleSubmit();
  }, []);

  useEffect(() => {
    handleSubmit();
  }, [filtro]);

  return (
    <>
      {dataProfesores.length != 0 && (
        <section className=" main__section mainTable">
          <h2 className="mainTable__h2">{"Profesores"}</h2>
          <table className="mainTable__table">
            <thead className="mainTable__table--thead">
              <tr>
                {listHeaderProfesores.map((item, index) => {
                  return (
                    <th key={`${index}__listHeader__profesores`}>{item}</th>
                  );
                })}
              </tr>
            </thead>
            <tbody className="mainTable__table--tbody mttbody">
              {dataProfesores &&
                dataProfesores.map((item, index) => {
                  return (
                    <RowSearchProfesor
                      className="mttbody__row"
                      key={`${index} RowTable2__alumnos`}
                      item={item}
                    />
                  );
                })}
            </tbody>
          </table>
        </section>
      )}
      {dataAlumnos.length != 0 && (
        <section className=" main__section mainTable">
          <h2 className="mainTable__h2">{"Alumnos"}</h2>
          <table className="mainTable__table">
            <thead className="mainTable__table--thead">
              <tr>
                {listHeaderAlumnos.map((item, index) => {
                  return <th key={`${index}__listHeader`}>{item}</th>;
                })}
              </tr>
            </thead>
            <tbody className="mainTable__table--tbody mttbody">
              {dataAlumnos &&
                dataAlumnos.map((item, index) => {
                  return (
                    <RowSearchAlumno
                      className="mttbody__row"
                      key={`${index} RowTable2`}
                      item={item}
                    />
                  );
                })}
            </tbody>
          </table>
        </section>
      )}
    </>
  );
}

export default Search;
