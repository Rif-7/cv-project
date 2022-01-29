import React from "react";

class General extends React.Component {
  render() {
    const { changeGeneral } = this.props;
    return (
      <div className="general-info">
        <div className="header">General</div>
        <Name changeHandler={changeGeneral} />
        <Email changeHandler={changeGeneral} />
        <Phone changeHandler={changeGeneral} />
      </div>
    );
  }
}

class Name extends React.Component {
  render() {
    return (
      <div className="name">
        <div className="first">
          <label htmlFor="first-name">First Name: </label>
          <input
            type="text"
            id="first-name"
            name="firstName"
            onChange={this.props.changeHandler}
          />
        </div>

        <div className="last">
          <label htmlFor="last-name">Last Name: </label>
          <input
            type="text"
            id="last-name"
            name="lastName"
            onChange={this.props.changeHandler}
          />
        </div>
      </div>
    );
  }
}

class Email extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={this.props.changeHandler}
        />
      </div>
    );
  }
}

class Phone extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="phone">Phone: </label>
        <input
          type="text"
          maxLength="10"
          name="phone"
          onChange={this.props.changeHandler}
        />
      </div>
    );
  }
}

export default General;
