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
export const deleteProfesorId = (id) =>
  axios.delete(`${END_POINTS.URL()}/api/profesores/eliminar/${id}`, authHeader);

export const putProfesor = (data) =>
  axios.put(`${END_POINTS.URL()}/api/profesores/actualizar`, data, authHeader);

export const getProfesores = (entidad) =>
  axios.get(`${END_POINTS.URL()}/api/${entidad}/obtener`);

export const getProfesoresAll = () =>
  axios.get(`${END_POINTS.URL()}/api/profesores/obtener`);

export const postProfesores = (data) =>
  axios.post(`${END_POINTS.URL()}/api/profesores/subir`, data, authHeader);

export const getCount = (entidad) =>
  axios.get(`${END_POINTS.URL()}/api/${entidad}/contar`);

/*alumnos*/

export const postAlumnos = (data) =>
  axios.post(`${END_POINTS.URL()}/api/alumnos/subir`, data, authHeader);

export const putAlumno = (data) =>
  axios.put(`${END_POINTS.URL()}/api/alumnos/actualizar`, data, authHeader);

export const deleteAlumno = (id) =>
  axios.delete(`${END_POINTS.URL()}/api/alumnos/eliminar/${id}`, authHeader);

/* cursos */
export const getListaCursos = () =>
  axios.get(`${END_POINTS.URL()}/api/cursos/obtener`);

export const getEntidad = (entidad) =>
  axios.get(`${END_POINTS.URL()}/api/${entidad}/obtener`);

/* incripciones */
