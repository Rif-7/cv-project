import React from "react";

function Education(props) {
  const { changeEducation } = props;
  return (
    <div className="educational-info">
      <div className="header">Education</div>
      <SchoolName changeHandler={changeEducation} />
      <Title changeHandler={changeEducation} />
      <YearOfStudy changeHandler={changeEducation} />
    </div>
  );
}

function SchoolName(props) {
  return (
    <div>
      <label htmlFor="school-name">School Name: </label>
      <input
        id="school-name"
        type="text"
        name="schoolName"
        onChange={props.changeHandler}
      />
    </div>
  );
}

function Title(props) {
  return (
    <div>
      <label htmlFor="educational-title">Educational Title: </label>
      <input
        id="educational-title"
        type="text"
        name="educationalTitle"
        onChange={props.changeHandler}
      />
    </div>
  );
}

function YearOfStudy(props) {
  return (
    <div className="year-of-study">
      <label htmlFor="year-of-study">Year of Study: </label>
      <div id="year-of-study">
        <input
          type="text"
          id="start-year"
          placeholder="From"
          name="educationStart"
          onChange={props.changeHandler}
        />
        <input
          type="text"
          id="end-year"
          placeholder="To"
          name="educationEnd"
          onChange={props.changeHandler}
        />
      </div>
    </div>
  );
}

export default Education;
