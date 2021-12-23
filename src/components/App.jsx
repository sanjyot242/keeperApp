import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import AddNote from "./AddNote";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((preValue) => {
      return [...preValue, note];
    });

    console.log(notes);
  }

  function deleteNote(id) {
    setNotes(() => {
      return notes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <AddNote onAdd={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        );
      })}

      {/* <Note
        name="Sanjyot"
        img="https://img.freepik.com/free-vector/abstract-scribble-icons-hand-drawn-doodle-coloring_179234-222.jpg?size=626&ext=jpg"
        tel="8208782735"
        email="sa@gmail.com"
      />

      <Note
        name="John"
        img="https://img.freepik.com/free-vector/abstract-scribble-icons-hand-drawn-doodle-coloring_179234-222.jpg?size=626&ext=jpg"
        tel="98593458349"
        email="kfjsdf"
      /> */}
      <Footer />
    </div>
  );
}

export default App;
