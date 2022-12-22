import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function First({ setName }) {
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault(); //I
    const form = e.target;
    if (
      form["firstname"].value.length > 1 &&
      form["lastname"].value.length > 1
    ) {
      setName(form["firstname"].value + " " + form["lastname"].value);
      navigate("/second");
    }
  };

  return (
    <form
      onSubmit={handleSubmit} //I
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2>Name</h2>
      <input
        pattern="^[a-zA-Z]+$"
        type="text"
        required
        name="firstname"
        placeholder="name"
      />
      <h2>lastname</h2>
      <input
        pattern="[0-9]{3,}"
        type="text"
        required
        name="lastname"
        placeholder="name"
      />
      <button style={{ cursor: "pointer" }}>Send</button>
    </form>
  );
}
