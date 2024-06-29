import axios from "axios";
import { END_POINTS } from "../../service/endPoints";
import { useDispatch } from "react-redux";
import {
  messageError,
  messageOk,
} from "../../redux/features/NotificationSlice";
import { loaderOff, loaderOn } from "../../redux/features/LoaderSlice";
import { recargarActualizar } from "../../redux/features/RecargarSlice";
import { profesorUpdateOn } from "../../redux/features/ProfesorUpdateSlice";

function TableProfesores({ item }) {
  const dispatch = useDispatch();

  const handleActiveFormUpdate = () => {
    console.log("dentre");
    dispatch(profesorUpdateOn(item));
  };

  const handleDelete = () => {
    dispatch(loaderOn());
    axios
      .delete(
        `${END_POINTS.URL()}/api/profesores/eliminar/${item.id_profesor}`,
        {}
      )
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
          <img src="images/pablo.png" alt="avatar" />
        </td>
        <td>{item.id_profesor}</td>
        <td>{item.nombre}</td>
        <td>{item.apellido}</td>
        <td>{item.email}</td>
        <td>{item.telefono}</td>
        <td>{item.estado}</td>
        <td className="icon">
          <i
            className="ri-pencil-line"
            onClick={handleActiveFormUpdate}
            title="modificar"
          ></i>
          <i
            className="ri-delete-bin-6-line"
            title="eliminar"
            onClick={handleDelete}
          ></i>
        </td>
      </tr>
    </>
  );
}

export default TableProfesores;
