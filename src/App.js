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
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      },
      education: {
        schoolName: "",
        educationalTitle: "",
        educationStart: "",
        educationEnd: "",
      },
      experience: {
        companyName: "",
        positionTitle: "",
        jobTasks: "",
        workStart: "",
        workEnd: "",
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
        <div>
          <Preview
            general={this.state.general}
            education={this.state.education}
            experience={this.state.experience}
          />
        </div>
      </div>
    );
  }
}

export default App;
