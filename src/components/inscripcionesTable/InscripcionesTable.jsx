import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { END_POINTS } from "../../service/endPoints";
import { loaderOff, loaderOn } from "../../redux/features/LoaderSlice";
import {
  messageError,
  messageOk,
} from "../../redux/features/NotificationSlice";
import RowInscripciones from "./RowInscripciones";

function InscripcionesTable() {
  const entidad = "inscripciones";
  const [data, setData] = useState(null);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { curso } = useParams();

  const listHeader = [
    "ID Inscripcion",
    "curso",
    "fecha de inscripción",
    "alumno",
    "ver",
  ];

  const handleGetIncripciones = () => {
    dispatch(loaderOn());
    axios
      .get(`${END_POINTS.URL()}/api/${entidad}/obtener/${id}`)
      .then((result) => {
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
    handleGetIncripciones();
  }, []);

  return (
    <>
      <section className=" main__section mainTable">
        <h2 className="mainTable__h2">curso de {curso}</h2>
        <table className="mainTable__table">
          <thead className="mainTable__table--thead">
            <tr>
              {listHeader.map((item, index) => {
                return <th key={`${index}__listHeader`}>{item}</th>;
              })}
            </tr>
          </thead>
          <tbody className="mainTable__table--tbody mttbody">
            {data &&
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

export default InscripcionesTable;
