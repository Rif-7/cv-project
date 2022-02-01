import React from "react";

function General(props) {
  const { changeGeneral } = props;
  return (
    <div className="general-info">
      <div className="header">General</div>
      <Name changeHandler={changeGeneral} />
      <Email changeHandler={changeGeneral} />
      <Phone changeHandler={changeGeneral} />
    </div>
  );
}

function Name(props) {
  return (
    <div className="name">
      <div className="first">
        <label htmlFor="first-name">First Name: </label>
        <input
          type="text"
          id="first-name"
          name="firstName"
          onChange={props.changeHandler}
        />
      </div>

      <div className="last">
        <label htmlFor="last-name">Last Name: </label>
        <input
          type="text"
          id="last-name"
          name="lastName"
          onChange={props.changeHandler}
        />
      </div>
    </div>
  );
}

function Email(props) {
  return (
    <div>
      <label htmlFor="email">Email: </label>
      <input
        type="email"
        id="email"
        name="email"
        onChange={props.changeHandler}
      />
    </div>
  );
}

function Phone(props) {
  return (
    <div>
      <label htmlFor="phone">Phone: </label>
      <input
        type="text"
        maxLength="10"
        name="phone"
        onChange={props.changeHandler}
      />
    </div>
  );
}

export default General;
