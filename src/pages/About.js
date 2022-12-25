import { width } from "@mui/system";
import React from "react";
import "./about.css";
import Menu from "../components/Menu";
import { FaStethoscope, FaUserNurse } from "react-icons/fa";
import { BsFillTelephoneInboundFill } from "react-icons/bs";

const About = () => {
  return (
    <>
      <div className="first-home-box ">
        <img
          className="abtt-img"
          src="https://www.consensusortho.com/wp-content/uploads/2019/10/Blog-Website-Header_Location-of-Patients.png"
        />
        <Menu />
        <div className="abt-section">
          <div className="abt-subsection">
            <h3 className="home-heading">Meet the best </h3>
            <h3 className="home-heading_h">Experts </h3>

            <p className="home-para">
              {" "}
              We here at Jeswani's are avaliable 24*7 to hear and help our
              patients.
            </p>
          </div>
          <div class="abt-subsection-img">
            <img
              src="https://pngimg.com/uploads/doctor/doctor_PNG16041.png"
              alt=""
              className="about-doc"
              style={{ contain: "cover" }}
            />
          </div>
        </div>
      </div>

      <div className="abt">
        <div className="abt-features">
          <div class="flex-row-item">
            <div className="feature-img">
              <FaStethoscope
                size={40}
                color="white"
                style={{ marginTop: "20px" }}
              />
            </div>

            <h3 className="feature-title"> BEST TREATEMENT</h3>
          </div>
          <div class="flex-row-item">
            <div className="feature-img">
              <BsFillTelephoneInboundFill
                size={40}
                color="white"
                style={{ marginTop: "20px" }}
              />
            </div>
            <h3 className="feature-title"> EMERGENCY HELP</h3>
          </div>
          <div class="flex-row-item">
            <div className="feature-img">
              <FaUserNurse
                size={40}
                color="white"
                style={{ marginTop: "20px" }}
              />
            </div>
            <h3 className="feature-title">MEDICAL STAFF</h3>
          </div>
        </div>
      </div>

      <div className="abt-hospital">
        <h3 className="abt-hospital-heading">ABOUT US </h3>
        <h4 className="abt-hospital-subheading">
          Jeswani Multispeciality Hospital is committed to maintain the highest
          standard of care and respond to the needs of the community in a
          compassionate manner.To provide state-of-the-art, high quality and
          cost-effective healthcare services and latest information to improve
          and maintain health for the well-being of the community.To
          unrelentingly pursue the creation of value for our customers,
          shareholders, employees and society at large.To foster a therapeutic
          relationship based on compassion that is felt, quality that is
          measurable and cost that is affordable.To become partners in health
          promotion with every section of society.
        </h4>
      </div>

      <div>
        <h3 className="doc-info-title"> OUR TEAM </h3>
      </div>

      <div className="our-team-sec">
        <div className="doc-info-left">
          <div className="left-div">
            <div>
              <img
                src="./images/proPic.png"
                style={{ height: "200px", width: "200px" }}
              />
            </div>
            <div>
              <h4>Dr Bhushan Parate</h4>
              <p>MBBS, MD (Nuerosurgeon)</p>
            </div>

            <div>
              <img
                src="./images/proPic.png"
                style={{ height: "200px", width: "200px", marginTop: "30px" }}
              />
            </div>
            <div>
              <h4>Dr Bhushan Wankar</h4>
              <p>MBBS, MD (Nuerosurgeon)</p>
            </div>
          </div>
        </div>

        <div className="trial">
          <img
            src="./images/docSymbol.png"
            style={{ textAlign: "center", height: "500px", width: "500px" }}
          />
        </div>
        <div className="doc-info-right">
          <div>
            <img
              src="./images/proPic.png"
              style={{ height: "200px", width: "200px" }}
            />
          </div>
          <div>
            <h4>Dr Shubham Jain</h4>
            <p> MBBS (Cardiologist) </p>
          </div>

          <div className="right-div">
            <div>
              <img
                src="./images/proPic.png"
                style={{
                  height: "200px",
                  width: "200px",
                  marginTop: "30px",
                }}
              />
            </div>
            <div>
              <h4>Virat Mahalle</h4>
              <p> Director </p>
            </div>
          </div>
        </div>
      </div>

      <div className="abt-footer">Contact us</div>
    </>
  );
};

export default About;
