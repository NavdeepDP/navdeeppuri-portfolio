import React from "react";
import Project from "../../components/Project/Project";

import StraightSets from "./../images/straightSets-1.gif";
import WeatherDashboard from "./../images/Weather-Dashboard.gif";

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
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
