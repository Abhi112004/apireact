import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./AddDate.css";
const EditDate = () => {
  const txtname = useRef();
  const txtemail = useRef();
  const txtpassword = useRef();

  const nav = useNavigate();
  var { id } = useParams();
  useEffect(() => {
    // alert(id)
    const pass = new FormData();
    pass.set("id", id);

    axios
      .post("https://geton.skmbpk1z.a2hosted.com/single-data.php", pass)
      .then(function (response) {
        console.log(response.data["name"]);
        txtname.current.value = response.data["name"];
        txtemail.current.value = response.data["email"];
        txtpassword.current.value = response.data["password"];
      });
  }, []);
  const HandleSubmit = (e) => {
    e.preventDefault();
    var name = txtname.current.value;
    var email = txtemail.current.value;
    var password = txtpassword.current.value;

    const pass = new FormData();
    pass.set("name", name);
    pass.set("email", email);
    pass.set("password", password);
    pass.set("id", id);

    axios
      .post("https://geton.skmbpk1z.a2hosted.com/edit-data.php", pass)
      .then(function (response) {
        if (response.data["status"] == "true") {
          nav("/View");
        } else {
          alert("error");
        }
      });
  };
  return (
    <>
      <div className="form-container">
        <form action="#" method="POST" onSubmit={HandleSubmit}>
          <table className="add-data-table">
            <tr>
              <td>
                <label for="name">Name:</label>
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
                <label for="email">Email:</label>
              </td>
              <td>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="form-input"
                  ref={txtemail}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label for="password">Password:</label>
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
              <td colspan="2">
                <button type="submit" className="submit-btn">
                  Submit
                </button>
              </td>
            </tr>
          </table>
        </form>
      </div>
    </>
  );
};
export default EditDate;
