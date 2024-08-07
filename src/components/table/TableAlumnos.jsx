import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loaderOff, loaderOn } from "../../redux/features/LoaderSlice";
import {
  messageError,
  messageOk,
} from "../../redux/features/NotificationSlice";
import { recargarActualizar } from "../../redux/features/RecargarSlice";
import { alumnoUpdateOn } from "../../redux/features/AlumnoUpdateSlice";
import { deleteAlumno } from "../../service/axiosData";

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

    deleteAlumno(item.id_alumno)
      .then((response) => {
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
    dispatch(alumnoUpdateOn(item));
  };

  return (
    <>
      {dayNow && (
        <tr>
          <td>
            <img src={item.url} alt="avatar" title="alumno" />
          </td>
          <td>{item.id_alumno}</td>
          <td>
            {item.nombre}, {item.apellido}
          </td>
          <td>{item.email}</td>
          <td>{dayNow}</td>
          <td>
            {item.nombre_curso} ({item.id_curso})
          </td>
          <td>
            <i
              className={
                item.estado
                  ? "ri-user-follow-line cttbody__active"
                  : "ri-user-forbid-line cttbody__inactive"
              }
              title={item.estado ? "activo" : "inactivo"}
            ></i>
          </td>
          <td className="icon">
            <i
              className="ri-user-settings-line cttbody__modify"
              title="modificar"
              onClick={handleActiveFormUpdate}
            ></i>
          </td>
          <td className="icon">
            <i
              className="ri-delete-bin-6-line cttbody__delete"
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
