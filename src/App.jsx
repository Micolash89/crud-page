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
import ProfesorForm from "./components/form/ProfesorForm";
import ProfesorUpdate from "./components/profesorUpdate/ProfesorUpdate";
import AlumnosForm from "./components/form/AlumnoForm";
import AlumnosUpdate from "./alumnoUpdate/AlumnoUpdate";

function App() {
  const [count, setCount] = useState(0);

  const listHeaderAlumnos = [
    "",
    "ID alumno",
    "nombre",
    "apellido",
    "email",
    "fecha nacimiento",
    "estado",
    "alta/baja",
    "",
  ];

  const listHeaderProfesores = [
    "",
    "ID Profesor",
    "nombre",
    "apellido",
    "email",
    "teléfono",
    "estado",
    "alta/baja",
    "",
  ];

  const listHeaderCursos = [
    "ID curso",
    "curso",
    "descripcion",
    "profesor",
    "estado",
    "ver",
  ];

  const listHeaderInscripciones = [
    "ID Inscripcion",
    "curso",
    "fecha de inscripción",
    "alumno",
    "ver",
  ];

  return (
    <>
      <ThemeProvider>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route
              path="/profesores"
              element={
                <Table
                  listaCabecera={listHeaderProfesores}
                  entidad="profesores"
                />
              }
            />
            <Route
              path="/alumnos"
              element={
                <Table listaCabecera={listHeaderAlumnos} entidad="alumnos" />
              }
            />

            <Route
              path="/cursos"
              element={
                <Table2 entidad="cursos" listHeader={listHeaderCursos} />
              }
            />

            <Route
              path="/cursoinscripcion/:id"
              element={
                <Table2
                  entidad="inscripciones"
                  listHeader={listHeaderInscripciones}
                />
              }
            />

            <Route path="/login" element={<Login />} />
          </Routes>
        </Main>

        <Loader />
        <ProfesorForm />
        <AlumnosForm />
        <ProfesorUpdate />
        <AlumnosUpdate />
        <Notification />
      </ThemeProvider>
    </>
  );
}

export default App;
