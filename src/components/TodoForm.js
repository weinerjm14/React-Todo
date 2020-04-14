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
          <button type="submit" className="addItem">
            Add Task
          </button>
          <button
            type="button"
            onClick={this.props.clearComplete}
            className="clearComplete"
          >
            Clear Completed
          </button>
        </form>
      </section>
    );
  }
}

export default Form;
