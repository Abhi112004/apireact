import axios from "axios";
import React, { useRef } from "react";
import "./AddDate.css";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const txtemail = useRef();
  const txtpassword = useRef();
  const naviget = useNavigate();

  const HandleSubmit = (e) => {
    e.preventDefault();
    var email = txtemail.current.value;
    var password = txtpassword.current.value;

    const pass = new FormData();
    pass.set("email", email);
    pass.set("password", password);

    axios
      .post("https://geton.skmbpk1z.a2hosted.com/login-data.php", pass)
      .then(function (response) {
        if (response.data["status"] === "true") {
          alert("Data login successfully");
        localStorage.setItem('email',email)
        naviget('/View')
        } else {
          alert("Error iogin data");
        }
      })
      .catch(function (error) {
        alert("An error occurred: " + error.message);
      });
  };

  return (
    <div className="form-container">
      <form action="#" method="POST" onSubmit={HandleSubmit}>
        <table className="add-data-table">
          <tbody>
            <tr>
              <td>
                <label htmlFor="email">Email:</label>
              </td>
              <td>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  ref={txtemail}
                  className="form-input"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="password">Password:</label>
              </td>
              <td>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  ref={txtpassword}
                  className="form-input"
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button type="submit" className="submit-btn">
                  Submit
                </button>
              </td>
            </tr>
            <tr>
              <td colSpan="2" style={{ textAlign: "center" }}>
                <span>Don't have an account? </span>
                <Link to="/insert" className="create-account-link">
                  Create Account
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Login;
