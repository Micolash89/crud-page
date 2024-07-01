import { useEffect, useState } from "react";

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
          <td>{item.estado}</td>
          <td className="icon">
            <i className="ri-eye-line"></i>
          </td>
        </tr>
      )}
    </>
  );
}

export default RowSearchAlumno;
