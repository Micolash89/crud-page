import React from "react";

function TableProfesores({ item }) {
  return (
    <>
      <tr>
        <td>
          <img src="images/pablo.png" alt="avatar" />
        </td>
        <td>{item.id_profesor}</td>
        <td>{item.nombre}</td>
        <td>{item.apellido}</td>
        <td>{item.email}</td>
        <td>{item.telefono}</td>
        <td>{item.estado}</td>
        <td className="icon">
          <i className="ri-pencil-line"></i>
          <i className="ri-delete-bin-6-line"></i>
        </td>
      </tr>
    </>
  );
}

export default TableProfesores;
