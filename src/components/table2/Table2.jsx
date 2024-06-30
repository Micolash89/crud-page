import { useEffect, useState } from "react";
import "./table2.css";
import axios from "axios";
import { END_POINTS } from "../../service/endPoints";
import { useDispatch, useSelector } from "react-redux";
import { loaderOff, loaderOn } from "../../redux/features/LoaderSlice";
import {
  messageError,
  messageOk,
} from "../../redux/features/NotificationSlice";
import RowTableCursos from "./RowTableCursos";
import { useParams } from "react-router-dom";
import RowInscripciones from "./RowInscripciones";

function Table2({ entidad, listHeader }) {
  const [data, setData] = useState(null);

  const recargarPagina = useSelector((state) => state.recargar.state);

  const { id } = useParams();

  const dispatch = useDispatch();

  const handleSubmit = () => {
    axios
      .get(`${END_POINTS.URL()}/api/${entidad}/obtener${!id ? "" : `/${id}`}`)
      .then((result) => {
        dispatch(loaderOn());
        console.log(result.data.payload);
        setData(result.data.payload);
        dispatch(messageOk(result.data.message));
      })
      .catch((err) => {
        dispatch(messageError(err.result.data.message));
        console.log(err);
      })
      .finally(() => {
        dispatch(loaderOff());
      });
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  useEffect(() => {
    handleSubmit();
  }, [recargarPagina]);

  return (
    <>
      <section className=" main__section mainTable">
        <h2 className="mainTable__h2">{entidad}</h2>
        <table className="mainTable__table">
          <thead className="mainTable__table--thead">
            <tr>
              {listHeader.map((item, index) => {
                return <th key={`${index}__listHeader`}>{item}</th>;
              })}
            </tr>
          </thead>
          <tbody className="mainTable__table--tbody mttbody">
            {entidad == "cursos" &&
              data &&
              data.map((item, index) => {
                return (
                  <RowTableCursos
                    className="mttbody__row"
                    key={`${index} RowTable2`}
                    item={item}
                  />
                );
              })}

            {entidad == "inscripciones" &&
              data &&
              data.map((item, index) => {
                return (
                  <RowInscripciones
                    key={`inscripciones_${index}`}
                    item={item}
                  />
                );
              })}
          </tbody>
        </table>
      </section>
    </>
  );
}

export default Table2;
