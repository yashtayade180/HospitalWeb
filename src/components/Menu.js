import React, { Fragment, useEffect } from "react";
import "./Menu.css";
import { Link, Navigate } from "react-router-dom";
import { isAuthenticated, signout } from "../auth/index";
import Sidebar from "./Sidebar";

const Menu = ({ history }) => {
  useEffect(() => {
    console.log("history", history);
  }, [history]);
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
              <span
                className="nav-ele"
                onClick={() => {
                  signout(() => {
                    history.push("/home");
                  });
                }}
              >
                SIGNOUT
              </span>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
