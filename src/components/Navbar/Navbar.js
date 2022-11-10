import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./navbar.css";
import Cookies from "js-cookie";

const Navbar = () => {
  const navigate = useNavigate();

  const logOut = (e) => {
    e.preventDefault();
    Cookies.remove("token");
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarSupport">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {localStorage.getItem("user_name") ? (
              <>
                {" "}
                <li className="nav-item">
                  <NavLink to="/" className="nav-link" aria-current="page">
                    خانه
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink to="/blog" className="nav-link">
                    ارسال بلاگ
                  </NavLink>
                </li> */}
                <li className="nav-item">
                  <NavLink to="/create" className="nav-link">
                    ایجاد بلاگ
                  </NavLink>
                </li>
                <li className="nav-item">
                  <span to="/nav" className="nav-link" onClick={logOut}>
                    خروج
                  </span>
                </li>
              </>
            ) : (
              <>
                {" "}
                <li className="nav-item">
                  <NavLink to="/" className="nav-link" aria-current="page">
                    خانه
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link">
                    ورود
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/register" className="nav-link">
                    ثبت نام
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink to="/blog" className="nav-link">
                    ارسال بلاگ
                  </NavLink>
                </li> */}
                <li className="nav-item">
                  <NavLink to="/create" className="nav-link">
                    ایجاد بلاگ
                  </NavLink>
                </li>
                <li className="nav-item">
                  <span to="/nav" className="nav-link" onClick={logOut}>
                    خروج
                  </span>
                </li>
              </>
            )}
          </ul>
        </div>
        <NavLink className="navbar-brand" to="/">
          وبلاگ من
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
