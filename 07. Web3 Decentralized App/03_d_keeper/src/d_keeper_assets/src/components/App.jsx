import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { d_keeper } from "../../../declarations/d_keeper"

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      d_keeper.createNote(newNote.title, newNote.content);
      return [newNote, ...prevNotes];
    });
  }

  useEffect(() => {
    console.log("UseEffect is triggered");
    fetchData();
  }, []);

  async function fetchData() {
    const notesArray = await d_keeper.readNotes();
    setNotes(notesArray);
  };

  function deleteNote(id) {
    d_keeper.removeNote(id);
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
