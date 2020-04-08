import React from "react";

import Form from "./components/TodoForm";

const toDoItem = [
  {
    id: 1586387996621,
    complete: false,
    name: "Homework Project",
  },
  {
    id: 1586388155300,
    complete: false,
    name: "Write Blog Post",
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      toDoItem,
    };
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <Form />
      </div>
    );
  }
}

export default App;
