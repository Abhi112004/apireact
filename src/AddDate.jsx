import axios from "axios";
import React, { useRef } from "react";
import "./AddDate.css";
import { useNavigate } from "react-router-dom";
const AddDate = () => {
  const txtname = useRef();
  const txtemail = useRef();
  const txtpassword = useRef();
  const naviget = useNavigate();

  const HandleSubmit = (e) => {
    e.preventDefault();
    var name = txtname.current.value;
    var email = txtemail.current.value;
    var password = txtpassword.current.value;

    const pass = new FormData();
    pass.set("name", name);
    pass.set("email", email);
    pass.set("password", password);

    axios
      .post("https://geton.skmbpk1z.a2hosted.com/insert-data.php", pass)
      .then(function (response) {
        if (response.data["status"] === "true") {
          alert("Data saved successfully");
          localStorage.setItem("email", email);
          naviget("/view");
        } else {
          alert("Error saving data");
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
                <label htmlFor="name">Name:</label>
              </td>
              <td>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  ref={txtname}
                  className="form-input"
                />
              </td>
            </tr>
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
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default AddDate;
