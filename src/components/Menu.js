import React, { Fragment } from "react";
import "./Menu.css";
import { Link, Navigate } from "react-router-dom";
import { isAuthenticated, signout } from "../auth/index";
import Sidebar from "./Sidebar";

const Menu = ({ history }) => {
  return (
    // <div className='color'>
    <header>
      <nav class="navbar">
        <ul>
          <li className="x">
            <Link to="/home" className="nav-ele" id="homeid">
              HOME
            </Link>
          </li>
          <li className="x">
            <Link to="/about" className="nav-ele">
              ABOUT
            </Link>
          </li>
          {!isAuthenticated() && (
            <Fragment>
              <li className="x">
                <Link to="/Signup" className="nav-ele">
                  SIGNUP
                </Link>
              </li>
              <li className="x">
                <Link to="/Signin" className="nav-ele">
                  SIGNIN
                </Link>
              </li>
            </Fragment>
          )}

          {isAuthenticated() && (
            <li className="x">
              <Link
                className="nav-ele"
                onClick={() => {
                  signout(() => <Navigate to="/home" />);
                }}
              >
                SIGNOUT
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
