import React from 'react'

function Education() {
  return (
    <div className='container text-light min-vh-100 d-flex flex-column justify-content-center align-items-center flex-column '>
      <h2 className='text-dark my-5'>My Education</h2>
      <table className="table table-hover table-danger table-striped table-bordered">
  <thead>
    <tr className=''>
      <th scope="col" className='text-center'>Sr No</th>
      <th scope="col" className='text-center'>Qualification</th>
      <th scope="col" className='text-center'>University</th>
      <th scope="col" className='text-center'>Pass-Out Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>SSC</td>
      <td>Vidyadham Prashala Shirur</td>
      <td>2014</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>HSC</td>
      <td>Vidyadham Prashala Shirur</td>
      <td>2016</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>BSC</td>
      <td>Chandmal Tarachand Bora College, Shirur </td>
      <td>2021</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>MCA</td>
      <td>Dr DY Patil School Of MCA </td>
      <td>2023</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default Education
