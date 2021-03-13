import React, { useState, useEffect, useRef, useReducer } from "react";
import "./App.css";
import { reducer } from "./reducer";
import Modal from "./Modal";

const defaultState = {
  list: [],
  isModalOpen: false,
  modalContent: "",
};

function App() {
  const [task, setTask] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);
  // const [empty, setEmpty] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task) {
      const newTask = { id: new Date().getTime().toString(), task };
      dispatch({ type: "ADD_TASK", payload: newTask });
      setTask("");
    } else {
      dispatch({ type: "EMPTY_ENTRY" });
    }
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  // useEffect(() => {
  //   refInput.current.focus();
  // });

  return (
    <section>
      <h2>todo list</h2>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <input
            className="task-input"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button type="submit" className="add-btn">
            add
          </button>
        </div>
      </form>

      {state.list.map(({ id, task }) => {
        return (
          <article key={id}>
            <div className="task-div">
              <p>{task}</p>
              <button
                className="remove-item-btn"
                onClick={() => dispatch({ type: "REMOVE_TASK", payload: id })}
              >
                clear
              </button>
            </div>
          </article>
        );
      })}

      <button
        className="clear-all-btn"
        onClick={() => dispatch({ type: "REMOVE_ALL" })}
      >
        clear all
      </button>
    </section>
  );
}

export default App;
