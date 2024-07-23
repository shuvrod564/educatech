import React from 'react'

const Education = () => {
  return (
    <>
      <div className="timeline-tell">
        <h3 className="title">Tell us about your education qualifications</h3>
        <p>Complete the information bellow</p>
      </div>
      <div className="d-flex flex-column gap-4 col-lg-8 mt-4">
        <div className="input__box">
          <label htmlFor="qualification_name">Name of Qualification</label>
          <input type="text" id="qualification_name" placeholder="eg. PHD" className="form-control" />
        </div>
        <div className="input__box">
          <label>Field of Study</label>
          <select className="form-select">
            <option>Public health</option>
            <option>Public health</option>
          </select> 
        </div>
        <div className="input__box">
          <label>University</label>
          <select className="form-select">
            <option value={"University One"}>University One</option> 
            <option value={"University Two"}>University Two</option> 
            <option value={"University Three"}>University Three</option> 
          </select> 
        </div>
        <div className="input__box">
          <label>Start Year</label>
          <select className="form-select">
            <option>2012</option>
            <option>2013</option>
          </select> 
        </div>
        <div className="input__box">
          <label>End Year</label>
          <select className="form-select">
            <option>2016</option>
            <option>2017</option>
          </select> 
        </div>
      </div>
    </>
  )
}

export default Education