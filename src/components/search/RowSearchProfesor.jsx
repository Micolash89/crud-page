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
          <td>{item.estado}</td>
          <td className="icon">
            <i className="ri-eye-line"></i>
          </td>
        </tr>
      )}
    </>
  );
}

export default RowSearchProfesor;
