// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

import ToDoCard from "./Todo";

const ToDoList = (props) => {
  console.log("TDList", props);
  return (
    <div className="list-item">
      {props.todo.map((item) => (
        <ToDoCard key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
    </div>
  );
};

export default ToDoList;
