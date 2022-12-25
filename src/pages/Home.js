import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import Menu from "../components/Menu";

const Home = () => {
  return (
    <>
      <div className="color">
        <div className="first-home-box ">
          <Menu />
          <div class="row">
            <div class="col">
              <h3 className="home-heading">JESWANI HOSPITAL</h3>
              <p className="home-para">
                {" "}
                Jeswani Hospital is a multi-specialty, tertiary care Hospital
                that lays its foundation on a Patient first ideology. The
                hospital caters to most branches of medicine. We started our
                service on 14 August 2022.Situated in Nagpur, Jeswani Hospital
                is the epitome of medical innovations and quality healthcare
                that offers easy connectivity and accessibility to patients from
                all the nodes across the City.
              </p>
            </div>
            <div class="col">
              <img src="/images/doctor_home.png" alt="" className="home-doc" />
            </div>
          </div>
        </div>
      </div>

      <div class="flex-row-container">
        <div class="flex-row-item">
          <div>
            <img src="/images/advtech.png" alt="" className="spimg" />
          </div>
          <h3 className="special-title">ADVANCED TECHNOLOGY</h3>{" "}
        </div>
        <div class="flex-row-item">
          {" "}
          <div>
            <img src="/images/247.png" alt="" className="spimg" />
          </div>
          <h3 className="special-title">24/7 AVAILABILITY</h3>
        </div>
        <div class="flex-row-item">
          <div>
            <img src="/images/bestdoc.png" alt="" className="spimg" />
          </div>
          <h3 className="special-title">BEST DOCTORS</h3>
        </div>
      </div>

      <div>
        <h2 className="about-heading">About Our Hospital</h2>
        <img src="/images/about-img.png" alt="" className="about-doct" />
        <p className="about-para">
          Healthcare is the most important aspect of life, and the pandemic has
          made this true more than ever. At Jeswani Hospital, our exceptional
          team of doctors, nurses and caregivers come together to bring you
          excellent care with the latest technologies, best medicine, and
          warmest service. The Jeswani Multispeciality Hospital is situated on
          the main Nagpur.
        </p>

        <button className="abt-btn">
          <Link to="/about" className="button">
            Read More
          </Link>
        </button>
      </div>

      {/* Our services part */}

      <div className="services">
        <h2 className="serv-head">Our Services </h2>
        <div className="serv-box">
          <div className="serv-subBox">
            <img src="/images/cardiology.png" alt="" className="ser-img" />{" "}
            Cardiology{" "}
          </div>

          <div className="serv-subBox">
            <img src="/images/dia.png" alt="" className="ser-img" /> Diagnosis
          </div>
        </div>

        <div className="serv-box">
          <div className="serv-subBox">
            <img src="/images/surgery.png" alt="" className="ser-img" /> Surgery
          </div>
          <div className="serv-subBox">
            <img src="/images/aid.png" alt="" className="ser-img" /> First Aid
          </div>
          <div className="serv-subBox">
            <img src="/images/the.png" alt="" className="ser-img" /> Therapy
          </div>
        </div>

        <button className="abt-btn">
          <Link to="/Home" className="button">
            Read More
          </Link>
        </button>
      </div>

      <footer className="base-home">
        © 2022 All Rights Reserved By Jeswani Hospital
      </footer>
    </>
  );
};

export default Home;
