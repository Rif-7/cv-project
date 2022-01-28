import React from "react";

class General extends React.Component {
  render() {
    return (
      <div className="general-info">
        <div className="header">General</div>
        <Name />
        <Email />
        <Phone />
      </div>
    );
  }
}

class Name extends React.Component {
  render() {
    return (
      <div className="name">
        <div className="first">
          <label for="first-name">First Name: </label>
          <input type="text" id="first-name" />
        </div>

        <div className="last">
          <label for="last-name">Last Name: </label>
          <input type="text" id="last-name" />
        </div>
      </div>
    );
  }
}

class Email extends React.Component {
  render() {
    return (
      <div>
        <label for="email">Email: </label>
        <input type="email" id="email" />
      </div>
    );
  }
}

class Phone extends React.Component {
  render() {
    return (
      <div>
        <label for="phone">Phone: </label>
        <input type="text" maxLength="10" />
      </div>
    );
  }
}

export default General;
