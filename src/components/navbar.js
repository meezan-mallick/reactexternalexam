import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div >
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand ml-5">
          User List
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-link">

              <Link to={"/"} className="navbar-brand ml-5">
                <a className="nav-link" href="/">Add User</a>
              </Link>

            </li>
            <li className="nav-link">
              <Link to={"/show"} className="navbar-brand ml-5">
                <a className="nav-link" href="/show">Show User</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;