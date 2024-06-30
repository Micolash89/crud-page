import { useEffect, useState } from "react";
import "./table2.css";
import axios from "axios";
import RowTable2 from "./RowTable2";
import { END_POINTS } from "../../service/endPoints";
import { useDispatch } from "react-redux";
import { loaderOff, loaderOn } from "../../redux/features/LoaderSlice";
import { messageError } from "../../redux/features/NotificationSlice";

function Table2({ entidad }) {
  const [data, setData] = useState(null);

  const listHeader = [
    "ID Profesor",
    "nombre",
    "apelldios",
    "email",
    "teléfono",
    "estado",
    "alta/baja",
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${END_POINTS.URL()}/api/${entidad}/obtener`)
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
  }, []);

  return (
    <>
      <section className=" main__section mainTable">
        <h2 className="mainTable__h2">Payment Details</h2>
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
                  <RowTable2
                    className="mttbody__row"
                    key={`${index} RowTable2`}
                    nombre={item.nombre}
                    apellido={item.apellido}
                    email={item.email}
                    estado={item.estado}
                    telefono={item.telefono}
                    id_profesor={item.id_profesor}
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
