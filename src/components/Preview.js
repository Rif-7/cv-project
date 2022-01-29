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
    return <div className="first-name">{this.props.firstName}</div>;
  }
}

class LastName extends React.Component {
  render() {
    return <div className="last-name">{this.props.lastName}</div>;
  }
}

class Email extends React.Component {
  render() {
    return <div>{this.props.email}</div>;
  }
}

class Phone extends React.Component {
  render() {
    return <div>{this.props.phone}</div>;
  }
}

class SchoolName extends React.Component {
  render() {
    return <div>{this.props.schoolName}</div>;
  }
}

class EducationalTitle extends React.Component {
  render() {
    return <div>{this.props.educationalTitle}</div>;
  }
}

class YearOfStudy extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.educationStart}</div>
        <div>{this.props.educationEnd}</div>
      </div>
    );
  }
}

class CompanyName extends React.Component {
  render() {
    return <div>{this.props.companyName}</div>;
  }
}

class PositionTitle extends React.Component {
  render() {
    return <div>{this.props.positionTitle}</div>;
  }
}

class JobTasks extends React.Component {
  render() {
    return <div>{this.props.jobTasks}</div>;
  }
}

class WorkingPeriod extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.workStart}</div>
        <div>{this.props.workEnd}</div>
      </div>
    );
  }
}

export default Preview;
