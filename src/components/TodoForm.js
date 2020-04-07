import React from "react";
import { render } from "@testing-library/react";

const Form = (props) => {
  render(
    <section className="inputForm">
      <label htmlFor="todoText">Enter Todo</label>
      <input type="text" name="todoText" />
      <button type="submit">Submit</button>
      <button type="button">Clear Completed</button>
    </section>
  );
};

export default Form;