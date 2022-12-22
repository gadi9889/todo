import React, { useEffect, useState } from "react";

export default function ToDoInput({ addToDo }) {
  return (
    <form
      onSubmit={addToDo}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <input type="text" name="toDo" style={{ display: "block" }} />
      <button>Add</button>
    </form>
  );
}
