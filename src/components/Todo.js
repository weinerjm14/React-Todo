import React from "react";

const ToDoCard = (props) => {
  console.log("TDCard", props);
  return (
    <section className="todoCard">
      <input type="checkbox" name="complete" />
      <p>{props.item.name}</p>
    </section>
  );
};

export default ToDoCard;
