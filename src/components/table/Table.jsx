import React, { useEffect, useState } from "react";
import "./table.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { END_POINTS } from "../../service/endPoints";
import { loaderOff, loaderOn } from "../../redux/features/LoaderSlice";
import { messageError } from "../../redux/features/NotificationSlice";
import TableProfesores from "./TableProfesores";
import { profesorFormOn } from "../../redux/features/ProfesorFormSlice";
import TableAlumnos from "./TableAlumnos";

function Table({ entidad, listaCabecera }) {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();

  const recargarPagina = useSelector((state) => state.recargar.state);

  const handleSubmit = () => {
    axios
      .get(`${END_POINTS.URL()}/api/${entidad}/obtener`)
      .then((result) => {
        dispatch(loaderOn());
        setData(result.data.payload);
      })
      .catch((err) => {
        dispatch(messageError("Error para obtener los profesores"));
        console.log(err);
      })
      .finally(() => {
        dispatch(loaderOff());
      });
  };

  useEffect(() => {
    handleSubmit();
  }, [recargarPagina]);

  useEffect(() => {}, []);

  return (
    <>
      <section className="crud">
        <div className="flexrow crud__div">
          <h2 className="crud__div--h2">{entidad} Lista</h2>
          <div className="flexrow crud__div--div">
            <i className="ri-expand-up-down-line"></i>
            <button
              onClick={() => {
                dispatch(profesorFormOn());
              }}
            >
              <i className="ri-add-line"></i>
              {entidad}
            </button>
          </div>
        </div>
        <section className="crud__table--container">
          <table className="crud__table">
            <thead className="crud__table--thead">
              <tr>
                {listaCabecera.map((item, index) => {
                  return <th key={`${index} listaCabecera${item}`}>{item}</th>;
                })}
              </tr>
            </thead>
            <tbody className="crud__table--tbody">
              {entidad == "profesores" &&
                data &&
                data.map((element, index) => {
                  return (
                    <TableProfesores
                      key={`${index} RowTable${element.nombre}`}
                      item={element}
                    />
                  );
                })}
              {entidad == "alumnos" &&
                data &&
                data.map((element, index) => {
                  return (
                    <TableAlumnos
                      key={`${index} RowTable${element.nombre}`}
                      item={element}
                    />
                  );
                })}
            </tbody>
          </table>
        </section>
      </section>
    </>
  );
}

export default Table;
