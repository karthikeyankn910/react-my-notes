import React, { useContext } from "react";
import "./css/navbar.css";
import { HandleContext } from "../App";

function Navbar() {
  const { handleNotesAdd } = useContext(HandleContext);
  return (
    <div className="navbar">
      <h2>Notes</h2>
      <button onClick={handleNotesAdd}>+ New</button>
    </div>
  );
}

export default Navbar;
