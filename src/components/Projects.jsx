import React from 'react'

function Projects() {
  return (
    <div className='container-fluid bg-light text-dark min-vh-100 d-flex flex-column justify-content-center align-items-center'>
      <div className="projects">
        <h1 className='text-center mb-4 my-5'>Projects</h1>
      <div className="row">
  <div className="col-sm-6 mb-3 mb-sm-0 mb-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">YouTube Clone</h5>
        <p className="card-text">Created a YouTube Clone to implement my knowledge in React.
        This project was created using the Youtube API and utilized react hooks for state management.</p>
        
        <a href="#" className="btn btn-danger">Read More</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6 mb-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Live Weather Forecast System</h5>
        <p className="card-text">Created project to see the live Weather Forecast. This forecast will helpful for the tourist, travellers and other people also.</p>
        <a href="#" className="btn btn-danger">Read More</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6 mb-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Online Medical Store System </h5>
        <p className="card-text">Created a project to order the medicines online from your home and we will deliver your medicines at your doorstep.</p>
        <a href="#" className="btn btn-danger">Read More</a>
      </div>
    </div>
  </div>
</div>
    </div>
    </div>
  )
}

export default Projects
