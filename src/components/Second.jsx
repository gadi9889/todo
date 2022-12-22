import React, { useEffect, useState } from "react";
import ToDoInput from "./ToDoInput";
import ToDoBoard from "./ToDoBoard";

export default function Second({ name }) {
  const [toDo, setToDo] = useState([]);
  const [counter, setCounter] = useState(0);

  const addToDo = (e) => {
    e.preventDefault(); //I
    const form = e.target;
    setToDo([...toDo, { id: counter, value: e.target["toDo"].value }]);
    setCounter(counter + 1);
  };

  const handleDelete = (id) => {
    const copy = [...toDo];
    copy.splice(findToDo(id), 1);
    setToDo([...copy]);
  };

  const handleEdit = (e, id, setEdit) => {
    e.preventDefault();
    const copy = [...toDo];
    const form = e.target;
    const index = findToDo(id, copy);
    copy[index].value = form["editValue"].value;
    setToDo([...copy]);
    setEdit(false);
  };

  const findToDo = (id, copy) => {
    for (let i = 0; i < copy.length; i++) {
      const toDo = copy[i];
      if (copy[i].id == id) {
        return i;
      }
    }
  };

  return (
    <div>
      <h3>{name}</h3>
      <ToDoInput addToDo={addToDo} />
      <ToDoBoard
        toDo={toDo}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
}
