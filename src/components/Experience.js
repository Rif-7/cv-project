import React from "react";

function Experience(props) {
  const { changeExperience } = props;
  return (
    <div className="experience-info">
      <div className="header">Experience</div>
      <CompanyName changeHandler={changeExperience} />
      <PositionTitle changeHandler={changeExperience} />
      <Tasks changeHandler={changeExperience} />
      <WorkingTime changeHandler={changeExperience} />
    </div>
  );
}

function CompanyName(props) {
  return (
    <div>
      <label htmlFor="company-name">Company Name: </label>
      <input
        type="text"
        id="company-name"
        name="companyName"
        onChange={props.changeHandler}
      />
    </div>
  );
}

function PositionTitle(props) {
  return (
    <div>
      <label htmlFor="position-title">Position Title: </label>
      <input
        type="text"
        id="position-title"
        name="positionTitle"
        onChange={props.changeHandler}
      />
    </div>
  );
}

function Tasks(props) {
  return (
    <div>
      <label htmlFor="tasks">Job Tasks: </label>
      <input
        type="text"
        id="tasks"
        name="jobTasks"
        onChange={props.changeHandler}
      />
    </div>
  );
}

function WorkingTime(props) {
  return (
    <div>
      <label htmlFor="working-time">Working Period: </label>
      <div className="working-time">
        <input
          type="text"
          placeholder="From"
          name="workStart"
          onChange={props.changeHandler}
        />
        <input
          type="text"
          placeholder="To"
          name="workEnd"
          onChange={props.changeHandler}
        />
      </div>
    </div>
  );
}

export default Experience;
