import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { Navigate } from "react-router-dom";
import "./Signin.css";
import { signin, authenticate, isAuthenticated } from "../auth/index";

const Signin = () => {
  const [values, setValues] = useState({
    email: " ",
    password: "",
    error: "",
    loading: false,
    didRedirect: false,
  });

  const { email, password, error, loading, didRedirect } = values;
  const { user } = isAuthenticated();

  useEffect(() => {
    console.log("user value", user);
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true,
            });
          });
        }
      })
      .catch(console.log("signin request failed"));
  };

  const performRedirect = () => {
    if (didRedirect) {
      // console.log('user',user)
      if (user && user.role === 1) {
        console.log("Login successful!");
        return <Navigate to="/dashboard" />;
      } else if (user && user.role === 0) {
        return <Navigate to="/about" />;
      } else {
        console.log("Login Unsuccessful!");
        return <Navigate to="/dashboard" />;
      }
    }
    if (isAuthenticated()) {
      return <Navigate to="/" />;
    }
  };

  const loadingMessage = () => {
    return (
      loading && (
        <div className="alert alert-info">
          <h2>Loading...</h2>
        </div>
      )
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  const signInForm = () => {
    return (
      <div className="row">
        <div className="col-md-11 offset-sm-0 text-left  ">
          <form>
            <div className=" form-group my-3">
              <label className="text-dark">Email</label>
              <input
                onChange={handleChange("email")}
                value={email}
                className="form-control"
                placeholder="sha@gmail.com"
                id="inputlg"
                type="email"
              />
            </div>

            <div className=" form-group my-3 ">
              <label className="text-dark">Password</label>
              <input
                onChange={handleChange("password")}
                value={password}
                className="form-control"
                id="inputlg"
                type="password"
                placeholder="123"
              />
            </div>
            <button
              onClick={onSubmit}
              className="btn btn-primary btn-block mt-3"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="page">
        <div>
          <img
            src="https://img.freepik.com/free-vector/tiny-doctors-patients-near-hospital-flat-vector-illustration-therapist-face-mask-saying-goodbye-cured-people-near-medical-building-ambulance-emergency-clinic-concept_74855-25338.jpg?w=740&t=st=1671360562~exp=1671361162~hmac=746cb12f63ad24b35e0fc9cddfee8abdaf24b3245f942faa48917a5bbd18b58d"
            style={{ height: "100vh", width: "100%" }}
          />
        </div>

        <div className="right-signup">
          <div>
            <h1
              className="signin-heading"
              style={{
                color: "steelblue",
                marginLeft: "-140px",
                alignItems: "left",
                textAlign: "center",
              }}
            >
              {" "}
              JESWANI MULTISPECIALITY HOSPITAL{" "}
            </h1>
            <img
              src="https://img.icons8.com/cotton/2x/user-male-circle.png"
              className="signin-logo"
            />
            <h4 className="signin-miniheading">SIGN IN HERE!</h4>
          </div>
          {loadingMessage()}
          {errorMessage()}
          {signInForm()}
          {performRedirect()}
        </div>

        {/* <p className="text-white text-center">{JSON.stringify(values)}</p> */}
      </div>
    </>
  );
};

export default Signin;
