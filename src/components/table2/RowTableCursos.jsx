import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { recargarActualizar } from "../../redux/features/RecargarSlice";

function RowTableCursos({ item }) {
  return (
    <>
      {item && (
        <tr>
          <td>{item.id_curso}</td>
          <td>{item.nombre_curso}</td>
          <td>
            {item.descripcion.length > 20
              ? item.descripcion.substring(0, 20) + "..."
              : item.descripcion}
          </td>
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
