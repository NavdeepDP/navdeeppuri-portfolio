import React from "react";
import Project from "../../components/Project/Project";

import StraightSets from "./../images/straightSets-1.gif";
import WeatherDashboard from "./../images/Weather-Dashboard.gif";
import EmployeeDirectory from "./../images/emp-dir.gif"
import CodeQuiz from "./../images/Coding-Quiz.gif"
import TeamGenerator from "./../images/team.png"
import Adventure from "./../images/FindYourAdventure1.png"



const Portfolio = () => {
  return (
    <div className="container">
      <div className="row">
        <div class="col-sm-12">
          <div className="text-center">
            <h3>Portfolio</h3>
          </div>
          <Project title="Straight Sets" image={StraightSets} />
          <Project title="Weather Dashboard" image={WeatherDashboard} />
          <Project title="Employee Directory" image={EmployeeDirectory} />
          <Project title="Code Quiz" image={CodeQuiz} />
          <Project title="Team Generator" image={TeamGenerator} />
          <Project title="Find Your Adventure" image={Adventure} />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
