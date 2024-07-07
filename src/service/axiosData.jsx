import axios from "axios";
import { END_POINTS } from "./endPoints";
import Cookies from "js-cookie";

const token = Cookies.get("crudCookieToken");

const authHeader = {
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${token}`,
  },
};
/*profesores*/
export const deleteProfesorId = (id) => {
  return axios.delete(
    `${END_POINTS.URL()}/api/profesores/eliminar/${id}`,
    authHeader
  );
};

export const putProfesor = (data) => {
  return axios.put(
    `${END_POINTS.URL()}/api/profesores/actualizar`,
    data,
    authHeader
  );
};

export const getProfesores = (entidad) => {
  return axios.get(`${END_POINTS.URL()}/api/${entidad}/obtener`);
};

export const postProfesores = (data) => {
  return axios.post(
    `${END_POINTS.URL()}/api/profesores/subir`,
    data,
    authHeader
  );
};

export const getCount = (entidad) => {
  return axios.get(`${END_POINTS.URL()}/api/${entidad}/contar`);
};

/*alumnos*/

export const postAlumnos = (data) => {
  return axios.post(`${END_POINTS.URL()}/api/alumnos/subir`, data, authHeader);
};

export const putAlumno = (data) => {
  return axios.put(
    `${END_POINTS.URL()}/api/alumnos/actualizar`,
    data,
    authHeader
  );
};

export const deleteAlumno = (id) => {
  return axios.delete(
    `${END_POINTS.URL()}/api/alumnos/eliminar/${id}`,
    authHeader
  );
};

/* cursos */
export const getListaCursos = () => {
  return axios.get(`${END_POINTS.URL()}/api/cursos/obtener`);
};

export const getEntidad = (entidad) => {
  return axios.get(`${END_POINTS.URL()}/api/${entidad}/obtener`);
};

/* incripciones */
