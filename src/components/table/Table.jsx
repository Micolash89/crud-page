import { useEffect, useState } from "react";
import "./table.css";
import { useDispatch, useSelector } from "react-redux";
import { loaderOff, loaderOn } from "../../redux/features/LoaderSlice";
import { messageError } from "../../redux/features/NotificationSlice";
import TableProfesores from "./TableProfesores";
import { profesorFormOn } from "../../redux/features/ProfesorFormSlice";
import TableAlumnos from "./TableAlumnos";
import { alumnosFormOn } from "../../redux/features/AlumnoFormSlice";
import { getProfesores } from "../../service/axiosData";

function Table({ entidad, listaCabecera }) {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();

  const recargarPagina = useSelector((state) => state.recargar.state);

  const handleSubmit = () => {
    getProfesores(entidad)
      .then((result) => {
        dispatch(loaderOn());
        console.log(result.data.payload);
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

  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <>
      <section className="crud">
        <div className="flexrow crud__div">
          <h2 className="crud__div--h2">Lista {entidad}</h2>
          <div className="flexrow crud__div--div">
            {/* <i className="ri-expand-up-down-line"></i> */}
            <button
              onClick={() => {
                entidad == "profesores"
                  ? dispatch(profesorFormOn())
                  : dispatch(alumnosFormOn());
              }}
            >
              <i className="ri-user-add-line"></i>
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
            <tbody className="crud__table--tbody cttbody">
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
