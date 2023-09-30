import * as React from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { Note } from '../models/note.model';

interface ICreateNotesProps {
    notes: Note[], //notes are of type Note array
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = ({notes, setNotes}) => {
    const [error, setError] = React.useState<string>(""); //store error states
    const titleRef = React.useRef<HTMLInputElement | null>(null);
    const textRef = React.useRef<HTMLTextAreaElement | null>(null);
    const colorRef = React.useRef<HTMLInputElement | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault(); //prevent page from refreshing every submit
        if (titleRef.current?.value === "" || textRef.current?.value === "") { //? optional field can be null
            return setError("All fields are mandatory");
        }

        setError(""); //empty value if no error
        setNotes([...notes, { //... show existing notes first
            id: (new Date()).toString(),
            //TS implicitely infers value as null from declaration, so must explicitly state type with ( as )
            title: (titleRef.current as HTMLInputElement).value,
            text: (textRef.current as HTMLTextAreaElement).value,
            color: (colorRef.current as HTMLInputElement).value,
            date: (new Date()).toString()
        }]);

        (titleRef.current as HTMLInputElement).value = "";
        (textRef.current as HTMLTextAreaElement).value = "";
    }

  return (
    <>
        <h2>Create Notes</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form className="mt-3 mb-3" onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className="md-3" controlId="formBasicTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Title for the Note" ref={ titleRef }/>
            </Form.Group>
        </Form>
        <Form className="mt-3 mb-3">
            <Form.Group className="md-3" controlId="formBasicTitle">
                <Form.Label>Text</Form.Label>
                <Form.Control type="text" placeholder="Enter your notes" as="textarea" rows={3} ref={ textRef }/>
            </Form.Group>
        </Form>
        <Form className="mt-3 mb-3">
            <Form.Group className="md-3" controlId="formBasicTitle">
                <Form.Label htmlFor="colorInput">Notes Color</Form.Label>
                <Form.Control type="color" id="colorInput" defaultValue="#dfdfdf" title="Choose your color" ref={ colorRef }/>
            </Form.Group>
            <Button type="submit" variant="primary">Submit</Button>
        </Form>
    </>
  );
};

export default CreateNotes;
