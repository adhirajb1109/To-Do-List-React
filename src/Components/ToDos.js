import React from "react";
import ToDo from "./ToDo";
function ToDos(props) {
  let style = {
    minHeight: "70vh",
  };
  return (
    <div className="container my-3" style={style}>
      <h3 className="text-center my-3">To-Do List</h3>
      {props.todos.length === 0
        ? "Add A To-Do"
        : props.todos.map((todo) => {
            return (
              <div>
                <ToDo
                  todo={todo}
                  key={todo.serialNum}
                  onDelete={props.onDelete}
                />
              </div>
            );
        })}
    </div>
  );
}

export default ToDos;
