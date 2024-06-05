import { useContext, useEffect, useRef, useState } from 'react';
import { postNote, updateNote } from '../../helper/helper';
import './CreateNote.css'
import { UserContext } from '../../Providers/UserContext';


const CreateNote = ({member, selectedNote, setSelectedNote, setNotes}: {member: number, selectedNote: {}, setSelectedNote: () => {}, setNotes: () => {}}) => {
    const [value, setValue] = useState("");
    const { setSubmit, focusRef } = useContext(UserContext);
    // @ts-ignore
    const noteInfo = useRef({
        member: member
    });

    useEffect(() => {
        // console.log("new selected notes!", selectedNote);
        setValue(selectedNote?.text || "")

        noteInfo.current.id = selectedNote?.id;
        noteInfo.current.member = member
        noteInfo.current.text = value;
        noteInfo.current.auditLog = selectedNote?.auditLog;

        // console.log("noteInfo", noteInfo)
    }, [selectedNote])

    useEffect(() => {
        noteInfo.current.member = member
        noteInfo.current.text = value;
    }, [value]) 
    
    const handleChange = (event) => {
        // @ts-ignore
        setValue(event.target.value)
        noteInfo.current.text = value;
    }

    const clear = () => {
        // console.log("clear")
        setValue("");
    }

    return <div>
        <h3>Note Editor</h3>
        <textarea className="note-container" value={value} onChange={handleChange}/>
        <div onClick={async() => await postNote(noteInfo.current, setSelectedNote, setSubmit, focusRef)} >submit as new note</div>
        <div onClick={async() => await updateNote(noteInfo.current, setSelectedNote, setSubmit, focusRef)}>
            update note
        </div>
        <div onClick={clear}>clear</div>
    </div>
}

export default CreateNote;