import { useDispatch } from "react-redux";
import {
  messageError,
  messageOk,
} from "../../redux/features/NotificationSlice";
import { loaderOff, loaderOn } from "../../redux/features/LoaderSlice";
import { recargarActualizar } from "../../redux/features/RecargarSlice";
import { profesorUpdateOn } from "../../redux/features/ProfesorUpdateSlice";
import { deleteProfesorId } from "../../service/axiosData";

function TableProfesores({ item }) {
  const dispatch = useDispatch();

  const handleActiveFormUpdate = () => {
    dispatch(profesorUpdateOn(item));
  };

  const handleDelete = () => {
    dispatch(loaderOn());

    deleteProfesorId(item.id_profesor)
      .then((response) => {
        console.log(response.data);
        dispatch(messageOk(response.data.message));
        dispatch(recargarActualizar());
      })
      .catch((err) => {
        dispatch(messageError(err.response.data.message));
      })
      .finally(() => {
        dispatch(loaderOff());
      });
  };

  return (
    <>
      <tr>
        <td>
          <img src={item.url} alt="avatar" title={item.role} />
        </td>
        <td>{item.id_profesor}</td>
        <td>
          {item.nombre}, {item.apellido}{" "}
        </td>
        <td>{item.nombre_curso}</td>
        <td>{item.email}</td>
        <td>{item.telefono}</td>
        <td>{item.role}</td>
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
          <i
            className="ri-user-settings-line cttbody__modify"
            onClick={handleActiveFormUpdate}
            title="modificar"
          ></i>
        </td>
        <td className="icon">
          <i
            className="ri-delete-bin-6-line cttbody__delete"
            title="eliminar"
            onClick={handleDelete}
          ></i>
        </td>
      </tr>
    </>
  );
}

export default TableProfesores;
