import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function RowInscripciones({ item }) {
  const [dayNow, setDayNow] = useState(null);

  //const recargarPagina = useSelector((state) => state.recargar.state);

  const format = (date, locale, options) =>
    new Intl.DateTimeFormat(locale, options).format(date);

  const fechaFormato = () => {
    const now = new Date(item.fecha_inscripcion);
    setDayNow(format(now, "es"));
  };

  useEffect(() => {
    if (!item.fecha_inscripcion) return;
    fechaFormato();
  }, []);

  return (
    <>
      {item && (
        <tr>
          <td>{item.id_inscripcion}</td>
          <td>{item.nombre_curso}</td>
          <td>{dayNow}</td>
          <td>
            {item.nombre_alumno} {item.apellido_alumno}
          </td>
          <td className="icon">
            <Link to={`/alumnos/${item.id_alumno}`}>
              <i className="ri-eye-line"></i>
            </Link>
          </td>
        </tr>
      )}
    </>
  );
}

export default RowInscripciones;
