import React, { useState } from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
import AllNotes from "./components/AllNotes";
import { v4 as uuidv4 } from "uuid";
import NoteEdit from "./components/NoteEdit";

export const HandleContext = React.createContext();

export default function App() {
  const sampleNotes = [
    {
      id: 1,
      title: "Your heading",
      description:
        "This is where your notes take place. You can edit or delete and create a new one. Try it!!!"
    }
  ];

  const [notes, setNotes] = useState(sampleNotes);
  const [selectedNoteId, setSelectedNoteId] = useState();

  const selectedNote = notes.find((n) => n.id === selectedNoteId);

  function handleNotesAdd() {
    const newNote = {
      id: uuidv4(),
      title: "",
      description: ""
    };
    setSelectedNoteId(newNote.id);
    setNotes([...notes, newNote]);
  }

  const handleNotesDelete = (id) => {
    setNotes([...notes.filter((n) => n.id !== id)]);
  };

  function handleCloseNoteEdit() {
    setSelectedNoteId(undefined);
  }

  function handleValueChangeNotes(id, changedNote) {
    const newNotes = [...notes];
    let index = notes.findIndex((n) => n.id === id);
    newNotes[index] = changedNote;
    setNotes(newNotes);
  }

  function handleNotesEdit(note) {
    setSelectedNoteId(note.id);
  }

  function handleSearchText(text) {
    console.log(text);
  }

  const val = {
    handleNotesDelete,
    handleNotesEdit,
    handleNotesAdd,
    handleCloseNoteEdit,
    handleValueChangeNotes
  };

  return (
    <HandleContext.Provider value={val}>
      <div className="App">
        <Navbar handleNotesAdd={handleNotesAdd} />
        <AllNotes notes={notes} handleSearchText={handleSearchText} />
        {selectedNote && (
          <NoteEdit
            note={selectedNote}
            handleCloseNoteEdit={handleCloseNoteEdit}
            handleValueChangeNotes={handleValueChangeNotes}
            handleNotesDelete={handleNotesDelete}
          />
        )}
      </div>
    </HandleContext.Provider>
  );
}
