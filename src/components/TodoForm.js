import React from "react";

class Form extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <section className="inputForm">
        <label htmlFor="todoText">Enter Todo</label>
        <input type="text" name="todoText" />
        <button type="submit">Submit</button>
        <button type="button">Clear Completed</button>
      </section>
    );
  }
}

export default Form;
