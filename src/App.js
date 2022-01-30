import Navbar from "./components/Navbar";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Preview from "./components/Preview";

import "./components/components.css";

import React from "react";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      general: {
        firstName: "John",
        lastName: "Doe",
        email: "example@company.com",
        phone: "1234567890",
      },
      education: {
        schoolName: "ABC School",
        educationalTitle: "High School",
        educationStart: "2003",
        educationEnd: "2007",
      },
      experience: {
        companyName: "XYZ Company",
        positionTitle: "Software Engineer",
        jobTasks: "Manage Database",
        workStart: "2015",
        workEnd: "2020",
      },
    };
  }

  changeGeneral = (e) => {
    const newGeneral = Object.assign({}, this.state.general);
    newGeneral[e.target.getAttribute("name")] = e.target.value;
    this.setState({
      general: newGeneral,
    });
  };

  changeEducation = (e) => {
    const newEducation = Object.assign({}, this.state.education);
    newEducation[e.target.getAttribute("name")] = e.target.value;
    this.setState({
      education: newEducation,
    });
  };

  changeExperience = (e) => {
    const newExperience = Object.assign({}, this.state.experience);
    newExperience[e.target.getAttribute("name")] = e.target.value;
    this.setState({
      experience: newExperience,
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <General changeGeneral={this.changeGeneral} />
          <Education changeEducation={this.changeEducation} />
          <Experience changeExperience={this.changeExperience} />
        </div>
        <Preview
          general={this.state.general}
          education={this.state.education}
          experience={this.state.experience}
        />
      </div>
    );
  }
}

export default App;
