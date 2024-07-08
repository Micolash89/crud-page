import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCantAlumnosXCurso } from "../../service/axiosData";

function RowTableCursos({ item }) {
  const [data, setData] = useState();

  const handleCantCursos = () => {
    getCantAlumnosXCurso(item.id_curso)
      .then((res) => {
        console.log(res.data);
        setData(res.data.payload.total);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    handleCantCursos();
  }, []);

  return (
    <>
      {item && (
        <tr>
          <td>{item.id_curso}</td>
          <td>{item.nombre_curso}</td>
          <td>
            {item.nombre_profesor} {item.apellido}
          </td>
          <td>{data}</td>
          <td className="icon">
            <Link to={`/inscripciones/${item.nombre_curso}/${item.id_curso}`}>
              <i className="ri-eye-line"></i>
            </Link>
          </td>
        </tr>
      )}
    </>
  );
}

export default RowTableCursos;
