import React from "react";
import "./Project.css";

const Project = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 " id="project-details">
          <h3>{props.title}</h3>
          <div>
            <img
              id="project-pic"
              src={props.image}
              alt="project pic"
              className="img-responsive"
            />
          </div>
          <div id="project-links">
            <a
              href="https://www.linkedin.com/in/navdeep-puri/"
              class="btn btn-primary  "
              target="_blank"
              role="button"
              aria-disabled="true"
            >
              View Website
            </a>
            <a
              href=""
              class="btn btn-primary  "
              target="_blank"
              role="button"
              aria-disabled="true"
            >
              View Source
            </a>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Project;
