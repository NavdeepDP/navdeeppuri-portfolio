import React from "react";
import Project from "../../components/Project/Project";
import Footer from "../../components/Footer/Footer";
import "./Portfolio.css";

import StraightSets from "./../images/straightSets-1.gif";
import WeatherDashboard from "./../images/Weather-Dashboard.gif";
import EmployeeDirectory from "./../images/emp-dir.gif";
import CodeQuiz from "./../images/Coding-Quiz.gif";
import TeamGenerator from "./../images/team.png";
import Adventure from "./../images/FindYourAdventure1.png";

const Portfolio = () => {
  return (
    // <div id="page-container">
    // <div id="content-wrap">

    <div className="container">
      <div className="row">
        <div class="col-sm-12">
          <div className="text-center">
            <h3>Portfolio</h3>
          </div>
          <Project
            title="Straight Sets"
            image={StraightSets}
            tech="MySQL, Node, Express, Handlebars and Sequelize ORM"
            source="https://github.com/NavdeepDP/Straight-Sets"
            website="https://straight-sets.herokuapp.com/"
          />
          <Project
            title="Weather Dashboard"
            image={WeatherDashboard}
            tech="OpenWeatherMap API services, JQuery, Moment.js"
            source="https://github.com/NavdeepDP/Weather-Dashboard"
            website="https://navdeepdp.github.io/Weather-Dashboard/"
          />
          <Project
            title="Employee Directory"
            image={EmployeeDirectory}
            tech="React, axios, gh-pages, moment"
            source="https://github.com/NavdeepDP/employee-directory-app"
            website="https://navdeepdp.github.io/employee-directory-app/"
          />
          <Project
            title="Code Quiz"
            image={CodeQuiz}
            tech="JavaScript"
            source="https://github.com/NavdeepDP/Code-Quiz"
            website="https://navdeepdp.github.io/Code-Quiz/"
          />

          <Project
            title="Team Generator"
            image={TeamGenerator}
            tech="inquirer, Nodejs"
            source="https://github.com/NavdeepDP/Engineering-Team-Generator"
            website=""
          />
          <Project
            title="Find Your Adventure"
            image={Adventure}
            tech="National Park Service API , JQuery, Bootstrap"
            source="https://github.com/NavdeepDP/Find-Your-Adventure"
            website="https://navdeepdp.github.io/Find-Your-Adventure/"
          />
        </div>
      </div>
    </div>

    //   </div>
    //   <Footer />
    // </div>
  );
};

export default Portfolio;
