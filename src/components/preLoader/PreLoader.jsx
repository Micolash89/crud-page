import axios from "axios";
import "./preloader.css";
import { END_POINTS } from "../../service/endPoints";
import { useEffect, useState } from "react";

function PreLoader() {
  const [display, setDisplay] = useState(false);
  //const [error, setError] = useState(false);
  const [loading, setLoading] = useState(0);
  const [string, setString] = useState(".");

  const fetchRetry = async () => {
    setDisplay(false);

    axios
      .get(`${END_POINTS.URL()}/api/profesores/obtener`)
      .then((response) => {
        console.log("response del loading", response.data);
        setDisplay(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchRetry();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (loading < 100 && !display) {
        setLoading(loading + 1);
        setString(string.length < 3 ? string + "." : ".");
      }
    }, 600);
  }, [loading]);

  return (
    <>
      <div
        className={`containerPreLoader ${display ? "ocultar" : ""} `}
        id="preloader"
      >
        <div className="text">
          <span>Cargando{string}</span>
        </div>
        <div className="loading">
          <div className="line-box">
            <div className="line"></div>
          </div>
        </div>
        <div className="numb">{loading} %</div>
      </div>
    </>
  );
}

export default PreLoader;
