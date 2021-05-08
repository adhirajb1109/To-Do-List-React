import React from "react";
import ToDo from "./ToDo";
function ToDos(props) {
  let style = {
    minHeight: "30vh",
  };
  return (
    <div className="container my-3" style={style}>
      {props.todos.map((todo) => {
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
