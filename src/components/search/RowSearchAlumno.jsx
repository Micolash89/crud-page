import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function RowSearchAlumno({ item }) {
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
  }, []);

  return (
    <>
      {item && (
        <tr>
          <td>{item.id_alumno}</td>
          <td>
            {item.nombre_alumno} {item.apellido_alumno}
          </td>
          <td>{item.email}</td>
          <td>{dayNow}</td>
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
            <Link to={`/alumnos/${item.id_alumno}`} className="icon">
              <i className="ri-eye-line"></i>
            </Link>
          </td>
        </tr>
      )}
    </>
  );
}

export default RowSearchAlumno;
