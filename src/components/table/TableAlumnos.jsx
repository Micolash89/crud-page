import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loaderOff, loaderOn } from "../../redux/features/LoaderSlice";
import axios from "axios";
import { END_POINTS } from "../../service/endPoints";
import {
  messageError,
  messageOk,
} from "../../redux/features/NotificationSlice";
import { recargarActualizar } from "../../redux/features/RecargarSlice";
import { alumnoUpdateOn } from "../../redux/features/AlumnoUpdateSlice";

function TableAlumnos({ item }) {
  const dispatch = useDispatch();
  const [dayNow, setDayNow] = useState(null);

  const format = (date, locale, options) =>
    new Intl.DateTimeFormat(locale, options).format(date);

  const fechaFormato = () => {
    const now = new Date(item.fecha_nacimiento);
    setDayNow(format(now, "es"));
  };

  useEffect(() => {
    if (!item.fecha_nacimiento) return;
    fechaFormato();
  }, [item.fecha_nacimiento]);

  const handleDelete = () => {
    dispatch(loaderOn());
    axios
      .delete(`${END_POINTS.URL()}/api/alumnos/eliminar/${item.id_alumno}`, {})
      .then((response) => {
        console.log(response.data);
        dispatch(messageOk(response.data.message));
        dispatch(recargarActualizar());
      })
      .catch((err) => {
        dispatch(messageError(err.response.data.message));
      })
      .finally(() => {
        dispatch(loaderOff());
      });
  };

  const handleActiveFormUpdate = () => {
    console.log("dentre");
    dispatch(alumnoUpdateOn(item));
  };

  return (
    <>
      {dayNow && (
        <tr>
          <td>
            <img src="images/pablo.png" alt="avatar" />
          </td>
          <td>{item.id_alumno}</td>
          <td>{item.nombre}</td>
          <td>{item.apellido}</td>
          <td>{item.email}</td>
          <td>{dayNow}</td>
          <td>{item.estado}</td>
          <td className="icon">
            <i
              className="ri-pencil-line"
              title="modificar"
              onClick={handleActiveFormUpdate}
            ></i>
            <i
              className="ri-delete-bin-6-line"
              title="eliminar"
              onClick={handleDelete}
            ></i>
          </td>
        </tr>
      )}
    </>
  );
}

export default TableAlumnos;
