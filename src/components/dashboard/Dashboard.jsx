import "./dashboard.css";

function Dashboard() {
  return (
    <>
      <section className="flexrow dashboard">
        <a href="student.html" className="flexrow dashboard__a" id="student">
          <div className="flexcolum">
            <i className="ri-graduation-cap-line"></i>
            <span>Student</span>
          </div>
          <span>1231</span>
        </a>
        <a href="index.html" className="flexrow dashboard__a" id="course">
          <div className="flexcolum">
            <i className="ri-mind-map"></i>
            <span>Student</span>
          </div>
          <span>1231</span>
        </a>
        <a href="dashboard.html" className="flexrow dashboard__a" id="payments">
          <div className="flexcolum">
            <i className="ri-function-fill"></i>
            <span>menu</span>
          </div>
          <span>1231</span>
        </a>
        <a href="login.html" className="flexrow dashboard__a" id="user">
          <div className="flexcolum">
            <i className="ri-user-line"></i>
            <span>login</span>
          </div>
          <span>1231</span>
        </a>
      </section>
    </>
  );
}

export default Dashboard;
