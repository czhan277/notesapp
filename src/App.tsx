import React, {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NotesList from './components/NotesList';
import Header from './components/Header'
import {Note} from './models/note.model';
import './App.css';
import CreateNotes from './components/CreateNotes';

function App() {
  const [notes, setNotes] = useState<Note[]>([{ //array of notes objects as type declaration
    id: (new Date).toString(),
    title: "Meetings",
    text: "Schedule meeting with UI/UX team",
    color: "#dfdfdf",
    date: (new Date).toString()
  }]); //initial state value is an array of notes

  return ( //jsx
  <>
    <Header />
    <Container className="mt-5">
      <Row>
        <Col>
        <NotesList notes={ notes } setNotes={ setNotes }/> {/*pass notes and setNotes prop to NotesList component*/}
        </Col>
      </Row>
      <Row>
        <Col>
        <CreateNotes notes={ notes } setNotes={ setNotes }/>
        </Col>
      </Row>
    </Container>
  </>
  );
}

export default App;
