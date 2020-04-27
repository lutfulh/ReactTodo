import React, { useState } from "react";
import { connect } from "react-redux";
import uuid from 'uuid/v4';
import { addTask } from "../Actions/action";

import "./NewtoDo.css";

function NewtoDo(props) {
  const [newtodo, setNewtodo] = useState("");

  const addNewItem = () => {
    props.addTask({
      id: uuid(),
      text: newtodo,
      isCompleted: false,
      isEditable: false,
    });
    setNewtodo("");
  };

  return (
    <div>
        <div className="todo-header">
      <h1>To-Do App!</h1>
      </div>
      <div className={"input"}>
 <h3>Add New To-Do</h3>
      <input
        type="text"
        placeholder="Enter new task"
        className="new-task"
        value={newtodo}
        onChange={(event) => setNewtodo(event.target.value)}
      />
      <button className="add-button" onClick={() => addNewItem()}>
        Add
      </button>
      </div>
    </div>
   
     
    
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (payload) => dispatch(addTask(payload)),
  };
};

export default connect(null, mapDispatchToProps)(NewtoDo);