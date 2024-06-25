import React from "react";

function TableAlumnos() {
  return (
    <div>
      <tr>
        <td>
          <img src="images/pablo.png" alt="avatar" />
        </td>
        <td>{item.id_alumno}</td>
        <td>{item.nombre}</td>
        <td>{item.apellido}</td>
        <td>{item.email}</td>
        <td>{item.fecha_nacimiento}</td>
        <td>{item.estado}</td>
        <td className="icon">
          <i className="ri-pencil-line"></i>
          <i className="ri-delete-bin-6-line"></i>
        </td>
      </tr>
    </div>
  );
}

export default TableAlumnos;
