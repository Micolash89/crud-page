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

function Table2({ entidad, listHeader }) {
  const [data, setData] = useState(null);

  const recargarPagina = useSelector((state) => state.recargar.state);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    axios
      .get(`${END_POINTS.URL()}/api/${entidad}/obtener`)
      .then((result) => {
        dispatch(loaderOn());
        console.log(result.data.payload);
        setData(result.data.payload);
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
        <div className="mainTable__div">
          <h2 className="mainTable__h2">{entidad}</h2>
        </div>
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
          </tbody>
        </table>
      </section>
    </>
  );
}

export default Table2;
