import React, { useState } from "react";
import Work8_note from "./Work8_note.js";

function Work8() {
    const [notes, setNotes] = useState([
        {
            id: 1,
            date: (new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()),
            content: "текст"
        },
        {
            id: 2,
            date: (new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()),
            content: "текст"
        },
        {
            id: 3,
            date: (new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()),
            content: "текст"
        },
    ]);



    const createNewNote = (target) => {
        let newNote = {
            id: notes.length > 0 ? (notes[notes.length - 1].id + 1) : 1,
            date: (new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()),
            content: target.value
        }

        if (target.value !== '') setNotes([...notes, newNote]);
        else alert("Введіть текст");

        target.value = '';
    }

    const deleteNote = (id) => {
        setNotes(notes.filter(note => note.id !== id));
    }

    const updateNote = (id) => {
        let target = document.getElementById("textareaNoteID" + id);
        target.style.display = "inline";
        target.focus();
    }

    const outFocus = (id, text) => {
        const updateNotes = notes.map(note => {
            const newNote = {
                id: note.id,
                date: note.date,
                content: text
            }

            if (note.id === id && text !== "") return { ...note, ...newNote };
            else return note;
        });
        
        setNotes(updateNotes);

        let target = document.getElementById("textareaNoteID" + id);
        target.style.display = "none";
        target.value = '';
    }


    const noteList = notes.map(note => 
            <Work8_note
                note={ note }
                onClickDelete={ () => deleteNote(note.id) }
                onClickUpdate={ () => updateNote(note.id) }
                onBlur={ (event) => outFocus(note.id, event.target.value) }
            />
        );

    return(
        <div>
            <textarea
                id="textaredID"
                rows="10"
                cols="40"
                placeholder="Your 'note'"
            >
            </textarea><br />
            <button
                onClick={ () => createNewNote(document.getElementById("textaredID")) }
            >
                Add new note
            </button>
            <div>
                { noteList }
            </div>
        </div>
    );
}

export default Work8;