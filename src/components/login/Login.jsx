import React from "react";
import "./login.css";

function Login() {
  return (
    <>
      <section className="flexcolum login">
        <section className="flexcolum login__container">
          <section className="flexcolum login__title">
            <h2 className="login__section--h2">CRUD OPERATIONS</h2>
            <div className="flexcolum login__section--div">
              <h3>sing in</h3>
              <p>Enter your credentials to access your account</p>
            </div>
          </section>

          <section className="flexcolum login__section">
            <form action="" className="flexcolum login__section--form">
              <label className="flexcolum" htmlFor="userInput">
                email
                <input
                  type="email"
                  name="user"
                  id="userInput"
                  placeholder="Enter your email"
                />
              </label>

              <label className="flexcolum" htmlFor="password">
                Password
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                />
              </label>

              <button type="submit">SING IN</button>
            </form>

            <p>
              Forgot your password? <a href="">Reset Password</a>
            </p>
          </section>
        </section>
      </section>
    </>
  );
}

export default Login;
