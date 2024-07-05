import "./loader.css";
import { useSelector } from "react-redux";
function Loader() {
  const loaderStatus = useSelector((state) => state.loader.state);

  return (
    <>
      {loaderStatus && (
        <div className="loader-container">
          <div className="lds-default">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </>
  );
}

export default Loader;
