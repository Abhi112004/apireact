import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css"; // Import the CSS file
const Header = () => {
    const navigate = useNavigate();
    const Handlelogout = () => {
      localStorage.clear();
      navigate("/");
    };
    return (
    <div className="header">
      {!localStorage.getItem("email") && <Link to="/">Login</Link>}
      {localStorage.getItem("email") && <Link to="/View">View</Link>}
      {localStorage.getItem("email") && <Link to="/insert">insert</Link>}
      {localStorage.getItem("email") && (
        <button type="button" onClick={Handlelogout}>
          Logout
        </button>
      )}
    </div>
  );
};

export default Header;
