import { Link } from "react-router-dom";

function RowTableCursos({ item }) {
  return (
    <>
      {item && (
        <tr>
          <td>{item.id_curso}</td>
          <td>{item.nombre_curso}</td>
          <td>
            {item.nombre_profesor} {item.apellido}
          </td>
          <td>{item.estado}</td>
          <td className="icon">
            <Link to={`/inscripciones/${item.id_curso}`}>
              <i className="ri-eye-line"></i>
            </Link>
          </td>
        </tr>
      )}
    </>
  );
}

export default RowTableCursos;
