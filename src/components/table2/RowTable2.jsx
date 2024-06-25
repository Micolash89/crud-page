function RowTable2({ nombre, apellido, email, estado, telefono, id_profesor }) {
  console.log(typeof nombre);
  return (
    <>
      <tr>
        <td>{id_profesor}</td>
        <td>{nombre}</td>
        <td>{apellido}</td>
        <td>{email}</td>
        <td>{telefono}</td>
        <td>{estado}</td>
        <td className="icon">
          <i className="ri-eye-line"></i>
        </td>
      </tr>
    </>
  );
}

export default RowTable2;
