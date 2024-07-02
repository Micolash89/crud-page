import { useSelector } from "react-redux";
import MainHeader from "../mainHeader/MainHeader";
import "./main.css";

function Main({ children }) {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <main className={`flexcolum main ${theme}`}>
      <MainHeader />

      {children}
    </main>
  );
}

export default Main;
