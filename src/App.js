import React from "react";

import Form from "./components/TodoForm";
import ToDoList from "./components/TodoList";
const toDoItem = [
  {
    name: "Homework Project",
    id: 1586387996621,
    complete: false,
  },
  {
    name: "Write Blog Post",
    id: 1586388155300,
    complete: false,
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
  addItem = (e, item) => {
    e.preventDefault();
    const newItem = {
      name: item,
      id: Date.now(),
      complete: false,
    };
    this.setState({
      toDoItem: [...this.state.toDoItem, newItem],
    });
  };

  toggleItem = (itemId) => {
    console.log(itemId);

    this.setState({
      toDoItem: this.state.toDoItem.map((item) => {
        if (itemId === item.id) {
          return {
            ...item,
            complete: !item.complete,
          };
        } else {
          return item;
        }
      }),
    });
  };
  clearComplete = (e) => {
    e.preventDefault();
    this.setState({
      toDoItem: this.state.toDoItem.filter((item) => !item.complete),
    });
  };
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoList todo={this.state.toDoItem} toggleItem={this.toggleItem} />
        <Form addItem={this.addItem} clearComplete={this.clearComplete} />
      </div>
    );
  }
}

export default App;
