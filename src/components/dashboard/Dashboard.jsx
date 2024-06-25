import "./dashboard.css";
import ItemDashboard from "./ItemDashboard";

function Dashboard() {
  const items = [
    {
      id: "student",
      icon: "ri-graduation-cap-line",
      content: "estudiantes",
      span: "123",
      url: "/",
    },
    {
      id: "course",
      icon: "ri-mind-map",
      content: "profesores",
      span: "123",
      url: "/table",
    },
    {
      id: "payments",
      icon: "ri-function-fill",
      content: "cursos",
      span: "123",
      url: "table2",
    },
    {
      id: "user",
      icon: "ri-user-line",
      content: "inscripciones",
      span: "123",
      url: "/login",
    },
  ];

  return (
    <>
      <section className="flexrow dashboard">
        {items.map((element, index) => {
          return (
            <>
              <ItemDashboard key={`${index} itemsDashBoard`} item={element} />
            </>
          );
        })}
      </section>
    </>
  );
}

export default Dashboard;
