import React from "react";
import "./Home.css";
import pdf from "./Navdeep_Resume.pdf";


const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div class="col-sm-12">
            <h1>
              Hi! My name is Navdeep. I am Software Developer living in Cumming,
              Georgia.
            </h1>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12" id="about">
            <h3>About: </h3>
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
            <h3 id="work">See my work Experience: </h3>
            <div id="leftAlign">
            <a href="#" class="btn btn-primary btn-lg "  role="button" aria-disabled="true">LinkedIn</a>
            <a href={pdf}  class="btn btn-primary btn-lg " target="_blank" role="button" aria-disabled="true">Resume</a>
            <a href="#" class="btn btn-primary btn-lg " role="button" aria-disabled="true">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
