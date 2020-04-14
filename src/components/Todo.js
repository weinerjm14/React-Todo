import React from "react";

const ToDoCard = (props) => {
  console.log("TDCard", props);
  return (
    <section className={`tdCard${props.item.complete ? " complete" : ""}`}>
      <input
        type="checkbox"
        name="complete"
        onChange={() => props.toggleItem(props.item.id)}
      />
      <p>{props.item.name}</p>
    </section>
  );
};

export default ToDoCard;
