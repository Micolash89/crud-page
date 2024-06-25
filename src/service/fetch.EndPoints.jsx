import axios from "axios";
import { END_POINTS } from "./endPoints";

/*axios (get, post,put,delete) - jscookie */
export const fetchEndpoint = {
  getProfesores: function () {
    return axios
      .get(`${END_POINTS.URL()}/api/profesores/obtener`)
      .then((result) => {
        // console.log(result.data.payload);
        return result.data.payload;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
