import { useDispatch, useSelector } from "react-redux";
import "./dashboard.css";
import ItemDashboard from "./ItemDashboard";
import { useEffect, useState } from "react";
import { getCount } from "../../service/axiosData";
import { loaderOff, loaderOn } from "../../redux/features/LoaderSlice";

function Dashboard() {
  const theme = useSelector((state) => state.theme.theme);
  const [cantProfesores, setCantProfesores] = useState(0);
  const [cantAlumnos, setCantAlumnos] = useState(0);
  const [cantCursos, setCantCursos] = useState(0);
  const recargarPagina = useSelector((state) => state.recargar.state);
  const dispatch = useDispatch();

  const handleCount = () => {
    dispatch(loaderOn());

    getCount("profesores")
      .then((response) => setCantProfesores(response.data.payload.total))
      .catch((err) => console.log(err));

    getCount("alumnos")
      .then((response) => setCantAlumnos(response.data.payload.total))
      .catch((err) => console.log(err));

    getCount("cursos")
      .then((response) => setCantCursos(response.data.payload.total))
      .catch((err) => console.log(err))
      .finally(() => dispatch(loaderOff()));
  };

  useEffect(() => {
    handleCount();
  }, []);

  useEffect(() => {
    handleCount();
  }, [recargarPagina]);

  const items = [
    {
      id: "course",
      icon: "ri-briefcase-line",
      content: "profesores",
      span: cantProfesores,
      url: "/profesores",
    },
    {
      id: "payments",
      icon: "ri-graduation-cap-line",
      content: "alumnos",
      span: cantAlumnos,
      url: "/alumnos",
    },
    {
      id: "student",
      icon: "ri-file-list-line",
      content: "cursos",
      span: cantCursos,
      url: "/cursos",
    },
  ];

  return (
    <>
      <section className={`flexrow dashboard ${theme}`}>
        {items.map((element, index) => {
          return (
            <ItemDashboard
              key={`${index}__${element.id}__dashboard`}
              item={element}
            />
          );
        })}
      </section>
    </>
  );
}

export default Dashboard;
