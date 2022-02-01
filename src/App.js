import Navbar from "./components/Navbar";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Preview from "./components/Preview";

import "./components/components.css";

import React, { useState } from "react";

function App() {
  const [general, setGeneral] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "example@company.com",
    phone: "1234567890",
  });

  const [education, setEducation] = useState({
    schoolName: "ABC School",
    educationalTitle: "High School",
    educationStart: "2003",
    educationEnd: "2007",
  });

  const [experience, setExperience] = useState({
    companyName: "XYZ Company",
    positionTitle: "Software Engineer",
    jobTasks: "Manage Database",
    workStart: "2015",
    workEnd: "2020",
  });

  const changeGeneral = (e) => {
    const newGeneral = Object.assign({}, general);
    newGeneral[e.target.getAttribute("name")] = e.target.value;
    setGeneral(newGeneral);
  };

  const changeEducation = (e) => {
    const newEducation = Object.assign({}, education);
    newEducation[e.target.getAttribute("name")] = e.target.value;
    setEducation(newEducation);
  };

  const changeExperience = (e) => {
    const newExperience = Object.assign({}, experience);
    newExperience[e.target.getAttribute("name")] = e.target.value;
    setExperience(newExperience);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <General changeGeneral={changeGeneral} />
        <Education changeEducation={changeEducation} />
        <Experience changeExperience={changeExperience} />
      </div>
      <div>
        <Preview
          general={general}
          education={education}
          experience={experience}
        />
      </div>
    </div>
  );
}

export default App;
