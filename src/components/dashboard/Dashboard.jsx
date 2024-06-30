import "./dashboard.css";
import ItemDashboard from "./ItemDashboard";

function Dashboard() {
  const items = [
    // {
    //   id: "student",
    //   icon: "ri-function-fill ",
    //   content: "Home",
    //   span: "123",
    //   url: "/",
    // },
    {
      id: "course",
      icon: "ri-briefcase-line",
      content: "profesores",
      span: "123",
      url: "/profesores",
    },
    {
      id: "payments",
      icon: "ri-graduation-cap-line",
      content: "alumnos",
      span: "123",
      url: "/alumnos",
    },
    {
      id: "student",
      icon: "ri-file-list-line",
      content: "cursos",
      span: "123",
      url: "/cursos",
    },
  ];

  return (
    <>
      <section className="flexrow dashboard">
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
