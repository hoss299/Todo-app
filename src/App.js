import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  // const [empty, setEmpty] = useState();

  const addTask = (e) => {
    e.preventDefault();

    const todo = { id: new Date().getTime().toString(), task };

    if (task) {
      setList((old) => {
        return [...old, todo];
      });
      setTask("");
    } else {
      console.log("empty");
    }
  };

  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  return (
    <section>
      <h2>todo list</h2>
      <form onSubmit={addTask}>
        <div className="form-control">
          <input
            className="task-input"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button className="add-btn">add</button>
        </div>
      </form>

      {list.map(({ id, task }) => {
        return (
          <article key={id}>
            <div className="task-div">
              <p>{task}</p>
              <button
                className="remove-item-btn"
                onClick={() => removeItem(id)}
              >
                clear
              </button>
            </div>
          </article>
        );
      })}

      <button className="clear-all-btn" onClick={() => setList([])}>
        clear all
      </button>
    </section>
  );
}

export default App;
