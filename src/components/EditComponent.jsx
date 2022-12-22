import React, { useState } from "react";

export default function EditComponent({ handleEdit, id, value }) {
  const [edit, setEdit] = useState(false);
  return (
    <>
      {!edit && (
        <>
          <h2>{value}</h2>
          <button
            onClick={(e) => {
              setEdit(true);
            }}
          >
            Edit
          </button>
        </>
      )}
      {edit && (
        <form
          onSubmit={(e) => {
            handleEdit(e, id, setEdit);
          }}
        >
          <input required type="text" name="editValue" defaultValue={value} />
          <button>Edit</button>
        </form>
      )}
    </>
  );
}
