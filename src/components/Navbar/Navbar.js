import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarSupport">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                خانه
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                ورود
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">
                ثبت نام
              </Link>
            </li>
          </ul>
        </div>
        <Link className="navbar-brand" to="/">
          وبلاگ من
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
