import "./App.css";
import Header from "./Components/Header";
import ToDos from "./Components/ToDos";
import Footer from "./Components/Footer";
import AddToDo from "./Components/AddToDo";
import About from "./Components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const addToDo = (title, description) => {
    let serialNum;
    if (todos.length === 0) {
      serialNum = 0;
    } else {
      serialNum = todos[todos.length - 1].serialNum + 1;
    }
    const myToDo = {
      serialNum: serialNum,
      title: title,
      description: description,
    };
    setTodos([...todos, myToDo]);
    console.log(myToDo);
  };
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <div className="App">
      <Router>
        <Header title="To-Do List" search={false} linkPage="About" />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <div>
                  <AddToDo addToDo={addToDo} />
                  <ToDos todos={todos} onDelete={onDelete} />
                </div>
              );
            }}
          ></Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
