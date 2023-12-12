import React from "react";

function Technologies() {
  return (
    <div className="container-fluid bg-dark text-light min-vh-75 d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-danger mb-4 my-5">Technologies I Worked</h1>
      <div className="row display-1">

        <div className="col-3">
          <i className="fa-brands fa-html5"></i>
        </div>

        <div className="col-3">
          <i className="fa-brands fa-html5"></i>
        </div>

        <div className="col-3">
          <i className="fa-brands fa-js"></i>
        </div>

        <div className="col-3">
          <i className="fa-brands fa-bootstrap"></i>
        </div>

        <div className="col-3">
          <i className="fa-brands fa-react" style={{ color: "#2aa7c6" }}></i>
        </div>

        <div className="col-3">
          <i className="fa-brands fa-angular" style={{ color: "#511f24" }}></i>
        </div>

        <div className="col-3">
          <i className="fa-brands fa-java" style={{ color: "#2d66c8" }}></i>
        </div>

        <div className="col-3">
          <i
            className="fa-solid fa-database"
            style={{ color: "blueviolet" }}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
