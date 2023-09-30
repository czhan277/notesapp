import * as React from 'react';
import Notes from './Notes';
import { Note } from '../models/note.model';

interface INotesListProps { //define prop
    notes: Note[], //notes are of type Note array
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

//destructure prop param as notes
//component NotesList has type React.FunctionComponent (React.FC)
//function component has props with type <INotesListProps> from interface
const NotesList: React.FunctionComponent<INotesListProps> = ({notes, setNotes}) => {
    const handleDelete = (id: string) => { //delete note based on id passed
        setNotes(notes.filter(note => note.id !== id));
    }
    const renderNotes = (): JSX.Element[] => {
        return notes.map(note => { //pass event as prop for handling delete
            return <Notes key={ note.id } note={ note } handleDelete={ handleDelete }/>
        })
    }
  return (
    <>
        <h2 className="mt-3">Notes</h2>
        <div>{ renderNotes() }</div>
    </>
  );
};

export default NotesList;

