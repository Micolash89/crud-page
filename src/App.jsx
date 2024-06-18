import { useState } from "react";

import "./App.css";
import { ThemeProvider } from "./components/context/ThemeContext";
import "./css/variables.css";
import "./css/estilosGenericos.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Notification from "./components/notification/Notification";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Table from "./components/table/Table";
import Loader from "./components/loaders/Loader";
import Login from "./components/login/Login";
import Table2 from "./components/table2/Table2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ThemeProvider>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/table" element={<Table />} />
            <Route path="/table2" element={<Table2 />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Main>

        <Loader />

        <Notification />
      </ThemeProvider>
    </>
  );
}

export default App;
