import React, { useEffect, useState } from "react";

function RowInscripciones({ item }) {
  const [dayNow, setDayNow] = useState(null);

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
      {item && item.length > 0 && (
        <tr>
          <td>{item.id_inscripcion}</td>
          <td>{item.nombre_curso}</td>
          <td>{dayNow}</td>
          <td>
            {item.nombre_alumno} {item.apellido_alumno}
          </td>
          <td className="icon">
            <i className="ri-eye-line"></i>
          </td>
        </tr>
      )}
    </>
  );
}

export default RowInscripciones;
