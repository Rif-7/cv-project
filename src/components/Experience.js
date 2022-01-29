import React from "react";

class Experience extends React.Component {
  render() {
    const { changeExperience } = this.props;
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
}

class CompanyName extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="company-name">Company Name: </label>
        <input
          type="text"
          id="company-name"
          name="companyName"
          onChange={this.props.changeHandler}
        />
      </div>
    );
  }
}

class PositionTitle extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="position-title">Position Title: </label>
        <input
          type="text"
          id="position-title"
          name="positionTitle"
          onChange={this.props.changeHandler}
        />
      </div>
    );
  }
}

class Tasks extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="tasks">Job Tasks: </label>
        <input
          type="text"
          id="tasks"
          name="jobTasks"
          onChange={this.props.changeHandler}
        />
      </div>
    );
  }
}

class WorkingTime extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="working-time">Working Period: </label>
        <div className="working-time">
          <input
            type="text"
            placeholder="From"
            name="workStart"
            onChange={this.props.changeHandler}
          />
          <input
            type="text"
            placeholder="To"
            name="workEnd"
            onChange={this.props.changeHandler}
          />
        </div>
      </div>
    );
  }
}

export default Experience;
