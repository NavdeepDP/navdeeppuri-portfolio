import React from "react";
import "./Project.css";

const Project = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 text-left">
          <h3>{props.title}</h3>
          <p>{props.tech}</p>
          <div id="project-links">
            <a
              href={props.website}
              className="btn btn-secondary btn-sm  "
              target="_blank"
              role="button"
              aria-disabled="true"
            >
              View Website
            </a>
            <a
              href={props.source}
              className="btn btn-secondary btn-sm  "
              target="_blank"
              role="button"
              aria-disabled="true"
            >
              View Source
            </a>
          </div>
        </div>
        <div className="col-sm-6">
          <div>
            <img
              id="project-pic"
              src={props.image}
              alt="project pic"
              className="img-responsive"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <hr id="hr" />
        </div>
      </div>
    </div>
  );
};

export default Project;
