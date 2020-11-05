import React from "react";
import "./Home.css";
import pdf from "./Navdeep_Resume.pdf";
import image from "./ProfilePicture.jpg";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <div className="container" id="page-content">
        <div className="row" id="top-row"></div>
        <div className="row">
          <div class="col-sm-12">
            
            <h3>
              Hi! My name is Navdeep. I am Software Developer living in Cumming,
              Georgia.
            </h3>

            <div class="text-center" id="image">
              <img id="profile-pic" src={image} class="" alt="profile pic" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12" id="about">
            <h4>About: </h4>
            <div>
              <p>
                My name is Navdeep Puri. I Live in Cumming, Georgia with my
                family. I did my schooling and graduation in India. Moved to
                Minnesota, United States in 2015 and in Georgia since 2018. I
                worked as a Software Engineer for around 10 years. Have
                experience working in embedded C, C++, ADA and C#. I love to
                code and debug. As a Software Engineer, I worked in product
                companies throughout the 10 year career, with end to end
                Software Development Life Cycle experience involving requirement
                analysis, software architecture and design, coding, unit/system
                testing and maintenance/support.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div class="col-sm-12">
            <h4 id="work">Work Experience: </h4>
            <div id="leftAlign">
              <a
                href="https://www.linkedin.com/in/navdeep-puri/"
                class="btn btn-secondary "
                target="_blank"
                role="button"
                aria-disabled="true"
              ><i className="fa fa-linkedin-square"> </i>
                LinkedIn
              </a>
              <a
                href={pdf}
                class="btn btn-secondary"
                target="_blank"
                role="button"
                aria-disabled="true"
              ><i className="fa fa-file"></i>
                Resume
              </a>
              <a
                href="https://github.com/NavdeepDP"
                class="btn btn-secondary"
                target="_blank"
                role="button"
                aria-disabled="true"
              > <i className="fa fa-github-square"></i>
                GitHub
              </a>
            </div>
          </div>
        </div>
      
      </div>   
    </div>
  );
};

export default Home;
