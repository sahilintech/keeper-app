import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App(note) {
    const [notes, setNotes] = useState([]);

    function addNote(note) {
        setNotes((prevNotes) => {
            return [...prevNotes, note];
        })
    }

    function deleteNote(id){
        setNotes((prevNotes) => {
            return prevNotes.filter((note, index) => {
                return (index !== id);
            })
        })
    }

    return (
        <div>
            <Header />
            <CreateArea
                onAdd={addNote}
            />
            {
                notes.map((todoNote, index) => (
                    <Note
                        key={index}
                        id={index}
                        note={todoNote}
                        onDelete={deleteNote}
                    />
                ))}
            <Footer />
        </div>
    )
}

export default App;