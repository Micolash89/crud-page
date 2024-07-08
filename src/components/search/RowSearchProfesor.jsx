import { Link } from "react-router-dom";

function RowSearchProfesor({ item }) {
  return (
    <>
      {item && (
        <tr>
          <td>{item.id_profesor}</td>
          <td>
            {item.nombre_profesor} {item.apellido_profesor}
          </td>
          <td>{item.nombre_curso}</td>
          <td>{item.telefono}</td>
          <td>{item.email}</td>
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
            <Link to={`/profesores/${item.id_profesor}`} className="icon">
              <i className="ri-eye-line"></i>
            </Link>
          </td>
        </tr>
      )}
    </>
  );
}

export default RowSearchProfesor;
