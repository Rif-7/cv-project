import React from "react";

class Preview extends React.Component {
  render() {
    return (
      <div className="preview-cv">
        <General general={this.props.general} />
        <Education education={this.props.education} />
        <Experience experience={this.props.experience} />
      </div>
    );
  }
}

class General extends React.Component {
  render() {
    const { firstName, lastName, email, phone } = this.props.general;
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
}

class Education extends React.Component {
  render() {
    const { schoolName, educationalTitle, educationStart, educationEnd } =
      this.props.education;
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
}

class Experience extends React.Component {
  render() {
    const { companyName, positionTitle, jobTasks, workStart, workEnd } =
      this.props.experience;
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
}

//Mini Components

class FirstName extends React.Component {
  render() {
    return (
      <div>
        <div className="preview first-name">
          First Name: <b>{this.props.firstName}</b>
        </div>
      </div>
    );
  }
}

class LastName extends React.Component {
  render() {
    return (
      <div className="preview last-name">
        Last Name: <b>{this.props.lastName}</b>
      </div>
    );
  }
}

class Email extends React.Component {
  render() {
    return (
      <div className="preview email">
        Email: <b>{this.props.email}</b>
      </div>
    );
  }
}

class Phone extends React.Component {
  render() {
    return (
      <div className="preview phone">
        Phone: <b>{this.props.phone}</b>
      </div>
    );
  }
}

class SchoolName extends React.Component {
  render() {
    return (
      <div className="preview school-name">
        School Name: <b>{this.props.schoolName}</b>
      </div>
    );
  }
}

class EducationalTitle extends React.Component {
  render() {
    return (
      <div className="preview educational-title">
        Educational Title: <b>{this.props.educationalTitle}</b>
      </div>
    );
  }
}

class YearOfStudy extends React.Component {
  render() {
    return (
      <div>
        <div className="preview year-of-study-preview">
          From <b>{this.props.educationStart}</b> To{" "}
          <b>{this.props.educationEnd}</b>
        </div>
      </div>
    );
  }
}

class CompanyName extends React.Component {
  render() {
    return (
      <div className="preview company-name">
        Company Name: <b>{this.props.companyName}</b>
      </div>
    );
  }
}

class PositionTitle extends React.Component {
  render() {
    return (
      <div className="preview position-title">
        Position Title: <b>{this.props.positionTitle}</b>
      </div>
    );
  }
}

class JobTasks extends React.Component {
  render() {
    return (
      <div className="preview job-tasks">
        Job Tasks: <b>{this.props.jobTasks}</b>{" "}
      </div>
    );
  }
}

class WorkingPeriod extends React.Component {
  render() {
    return (
      <div>
        <div className="preview work-period">
          From <b>{this.props.workStart}</b> to <b>{this.props.workEnd}</b>
        </div>
      </div>
    );
  }
}

export default Preview;
