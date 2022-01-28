import React from "react";

class Experience extends React.Component {
  render() {
    return (
      <div className="experience-info">
        <div className="header">Experience</div>
        <CompanyName />
        <PositionTitle />
        <Tasks />
        <WorkingTime />
      </div>
    );
  }
}

class CompanyName extends React.Component {
  render() {
    return (
      <div>
        <label for="company-name">Company Name: </label>
        <input type="text" id="company-name" />
      </div>
    );
  }
}

class PositionTitle extends React.Component {
  render() {
    return (
      <div>
        <label for="position-title">Position Title: </label>
        <input type="text" id="position-title" />
      </div>
    );
  }
}

class Tasks extends React.Component {
  render() {
    return (
      <div>
        <label for="tasks">Job Tasks: </label>
        <input type="text" id="tasks" />
      </div>
    );
  }
}

class WorkingTime extends React.Component {
  render() {
    return (
      <div>
        <label for="working-time">Working Time: </label>
        <div className="working-time">
          <input type="text" placeholder="From" />
          <input type="text" placeholder="To" />
        </div>
      </div>
    );
  }
}

export default Experience;
