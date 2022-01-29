import React from "react";

class Education extends React.Component {
  render() {
    const { changeEducation } = this.props;
    return (
      <div className="educational-info">
        <div className="header">Education</div>
        <SchoolName changeHandler={changeEducation} />
        <Title changeHandler={changeEducation} />
        <YearOfStudy changeHandler={changeEducation} />
      </div>
    );
  }
}

class SchoolName extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="school-name">School Name: </label>
        <input
          id="school-name"
          type="text"
          name="schoolName"
          onChange={this.props.changeHandler}
        />
      </div>
    );
  }
}

class Title extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="educational-title">Educational Title: </label>
        <input
          id="educational-title"
          type="text"
          name="educationalTitle"
          onChange={this.props.changeHandler}
        />
      </div>
    );
  }
}

class YearOfStudy extends React.Component {
  render() {
    return (
      <div className="year-of-study">
        <label htmlFor="year-of-study">Year of Study: </label>
        <div id="year-of-study">
          <input
            type="text"
            id="start-year"
            placeholder="From"
            name="educationStart"
            onChange={this.props.changeHandler}
          />
          <input
            type="text"
            id="end-year"
            placeholder="To"
            name="educationEnd"
            onChange={this.props.changeHandler}
          />
        </div>
      </div>
    );
  }
}
export default Education;
