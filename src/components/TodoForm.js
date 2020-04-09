import React from "react";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      item: "",
    };
  }
  handleChanges = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.item);
  };

  submitItem = (e) => {
    e.preventDefault();

    this.setState({ item: "" });
    this.props.addItem(e, this.state.item);
  };
  render() {
    return (
      <section className="inputForm">
        <form onSubmit={this.submitItem}>
          <label htmlFor="item">Enter Task</label>
          <input
            type="text"
            name="item"
            value={this.state.item}
            onChange={this.handleChanges}
          />
          <button type="submit">Submit</button>
          <button type="button">Clear Completed</button>
        </form>
      </section>
    );
  }
}

export default Form;
