import "./preloader.css";
import { useEffect, useState } from "react";
import Error from "../error/Error";
import { getProfesoresAll } from "../../service/axiosData";

function PreLoader() {
  const [display, setDisplay] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(0);
  const [string, setString] = useState(".");

  const fetchRetry = async () => {
    setDisplay(false);
    setError(false);

    getProfesoresAll()
      .then((response) => {
        setDisplay(true);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  useEffect(() => {
    fetchRetry();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (loading < 100 && !display && !error) {
        setLoading(loading + 1);
        setString(string.length < 3 ? string + "." : ".");
      }
    }, 1200);
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
        {error && <Error />}
      </div>
    </>
  );
}

export default PreLoader;
