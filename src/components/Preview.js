import React from "react";

function Preview(props) {
  return (
    <div className="preview-cv">
      <General general={props.general} />
      <Education education={props.education} />
      <Experience experience={props.experience} />
    </div>
  );
}

function General(props) {
  const { firstName, lastName, email, phone } = props.general;
  return (
    <div className="preview-general">
      <div className="preview-header">General Information</div>
      <FirstName firstName={firstName} />
      <LastName lastName={lastName} />
      <Email email={email} />
      <Phone phone={phone} />
    </div>
  );
}

function Education(props) {
  const { schoolName, educationalTitle, educationStart, educationEnd } =
    props.education;
  return (
    <div className="preview-education">
      <div className="preview-header">Educational Information</div>
      <SchoolName schoolName={schoolName} />
      <EducationalTitle educationalTitle={educationalTitle} />
      <YearOfStudy
        educationStart={educationStart}
        educationEnd={educationEnd}
      />
    </div>
  );
}

function Experience(props) {
  const { companyName, positionTitle, jobTasks, workStart, workEnd } =
    props.experience;
  return (
    <div className="preview-experience">
      <div className="preview-header">Experience's</div>
      <CompanyName companyName={companyName} />
      <PositionTitle positionTitle={positionTitle} />
      <JobTasks jobTasks={jobTasks} />
      <WorkingPeriod workStart={workStart} workEnd={workEnd} />
    </div>
  );
}

//Mini Components

function FirstName(props) {
  return (
    <div>
      <div className="preview first-name">
        First Name: <b>{props.firstName}</b>
      </div>
    </div>
  );
}

function LastName(props) {
  return (
    <div className="preview last-name">
      Last Name: <b>{props.lastName}</b>
    </div>
  );
}

function Email(props) {
  return (
    <div className="preview email">
      Email: <b>{props.email}</b>
    </div>
  );
}

function Phone(props) {
  return (
    <div className="preview phone">
      Phone: <b>{props.phone}</b>
    </div>
  );
}

function SchoolName(props) {
  return (
    <div className="preview school-name">
      School Name: <b>{props.schoolName}</b>
    </div>
  );
}

function EducationalTitle(props) {
  return (
    <div className="preview educational-title">
      Educational Title: <b>{props.educationalTitle}</b>
    </div>
  );
}

function YearOfStudy(props) {
  return (
    <div>
      <div className="preview year-of-study-preview">
        From <b>{props.educationStart}</b> To <b>{props.educationEnd}</b>
      </div>
    </div>
  );
}

function CompanyName(props) {
  return (
    <div className="preview company-name">
      Company Name: <b>{props.companyName}</b>
    </div>
  );
}

function PositionTitle(props) {
  return (
    <div className="preview position-title">
      Position Title: <b>{props.positionTitle}</b>
    </div>
  );
}

function JobTasks(props) {
  return (
    <div className="preview job-tasks">
      Job Tasks: <b>{props.jobTasks}</b>{" "}
    </div>
  );
}

function WorkingPeriod(props) {
  return (
    <div>
      <div className="preview work-period">
        From <b>{props.workStart}</b> to <b>{props.workEnd}</b>
      </div>
    </div>
  );
}

export default Preview;
