import React, { useState } from "react";
import Heading from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";


function App()
{
    const [notes,setNotes]=useState([]);
    
    function addNote(newNote)
    {
        setNotes(prevNotes=>{
            return [...prevNotes,newNote];
        });
    }
    
    function handleDelete(id)
    {
        setNotes(prevNotes=>{
            return prevNotes.filter((note,index)=>{
                return index!==id;
            })
        })
    }
    
    return (
    <div>
        <Heading />

        <CreateArea 
            onAdd={addNote}  
        />

        {notes.map((noteItem,index)=>{
        return(
            <Note 
                key={index}
                id={index}
                title={noteItem.title}
                content={noteItem.content}
                bgColor={noteItem.color}
                onDelete={handleDelete}
            />

            )
        })}
        <Footer />
    </div>);
}

export default App;