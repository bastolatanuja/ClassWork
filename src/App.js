//import logo from './logo.svg';
import './App.css';
import {useState} from "react";
//import Feedback from './components/Feedback';

function App(props) {
  const [notes,setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(false)

const noteToShow = showAll ?notes : notes.filter(n => n.important === true)


  const handleChange=(event)=>{
    console.log(event.target.value)
    setNewNote(event.target.value)
  }
  const handleAdd=(event)=>{
    event.preventDefault()
    console.log(event.target)

    //create a note object
  const note ={
    id:notes.length+1,
    content:newNote,
    date:new Date().toISOString(),
    important: Math.random() < 0.5
  }

  if(newNote !== '') setNotes(notes.concat(note))
  
  
  setNewNote('')

  }

  
  return(
    <div>
    <h1> Notes</h1>
    <button onClick = {() => setShowAll(!showAll)}> 
      toogle
    </button>
    <ul>
      {noteToShow.map(note =>
        <li key={note.id}><p> {note.content}</p>
        <p> {note.date}</p>
      </li> 
      )}
        </ul>
        <form>
          <input value={newNote} onChange={handleChange}/>
          <button onClick={handleAdd}>add</button>
        </form>
    </div>
  );
  
  
}

export default App;
