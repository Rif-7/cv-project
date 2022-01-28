import React from "react";

class Education extends React.Component {
  render() {
    return (
      <div className="educational-info">
        <div className="header">Education</div>
        <SchoolName />
        <Title />
        <YearOfStudy />
      </div>
    );
  }
}

class SchoolName extends React.Component {
  render() {
    return (
      <div>
        <label for="school-name">School Name: </label>
        <input id="school-name" type="text" />
      </div>
    );
  }
}

class Title extends React.Component {
  render() {
    return (
      <div>
        <label for="educational-title">Educational Title: </label>
        <input id="educational-title" type="text" />
      </div>
    );
  }
}

class YearOfStudy extends React.Component {
  render() {
    return (
      <div className="year-of-study">
        <label for="year-of-study">Year of Study: </label>
        <div id="year-of-study">
          <input type="text" id="start-year" placeholder="Starting Year" />
          <input type="text" id="end-year" placeholder="Finishing Year" />
        </div>
      </div>
    );
  }
}
export default Education;
