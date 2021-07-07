import React, { useContext } from "react";
import { HandleContext } from "../App";
import "./css/note-edit.css";

function NoteEdit({ note }) {
  const {
    handleCloseNoteEdit,
    handleNotesDelete,
    handleValueChangeNotes
  } = useContext(HandleContext);

  const handleChange = (changes) => {
    handleValueChangeNotes(note.id, { ...note, ...changes });
  };

  const handleSubmit = () => {
    if (!(note.title === "" || note.description === "")) {
      handleCloseNoteEdit();
    } else {
      alert("Please fill the Title and Description. Otherwise cancel it.");
    }
  };

  const handleCancel = () => {
    if (note.title === "" || note.description === "")
      handleNotesDelete(note.id);
    handleCloseNoteEdit();
  };

  return (
    <div className="new-card-background">
      <div className="new-card">
        <button className="close-button" onClick={handleCancel}>
          &times;
        </button>
        <h3>Type your new Note:</h3>
        <div className="input-controller">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={note.title}
            onChange={(e) => {
              handleChange({ title: e.target.value });
            }}
          />
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={note.description}
            onChange={(e) => {
              handleChange({ description: e.target.value });
            }}
          ></textarea>
          <button
            onClick={handleSubmit}
            type="submit"
            className="submit-button"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

export default NoteEdit;
