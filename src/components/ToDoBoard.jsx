import React, { useEffect, useState } from "react";
import EditComponent from "./EditComponent";

export default function ToDoBoard({ toDo, handleDelete, handleEdit }) {
  return (
    <div>
      {toDo.length ? (
        toDo.map((toDo) => {
          return (
            <div
              key={toDo.id}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <EditComponent
                handleEdit={handleEdit}
                id={toDo.id}
                value={toDo.value}
              />
              <button onClick={() => handleDelete(toDo.id)}>Remove</button>
            </div>
          );
        })
      ) : (
        <h2>To Do Empty</h2>
      )}
    </div>
  );
}
