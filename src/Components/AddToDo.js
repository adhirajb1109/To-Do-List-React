import React from "react";
import { useState } from "react";
export default function AddToDo(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const submit = (e) => {
    e.preventDefault();
    props.addToDo(title, description);
    setTitle("");
    setDescription("");
  };
  return (
    <div className="container my-3">
      <h3>Add A To-Do</h3>
      <form onSubmit={submit}>
        <div className="my-3">
          <label htmlFor="title" className="form-label">
            Enter To-Do Title :{" "}
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            required
          />
        </div>
        <div className="my-3">
          <label htmlFor="description" className="form-label">
            Enter To-Do Description :
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            required
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Add
        </button>
      </form>
    </div>
  );
}
