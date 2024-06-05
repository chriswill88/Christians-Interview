import { useContext } from 'react';
import './Note.css'
import { UserContext } from '../../Providers/UserContext';
import { calculateTime } from '../../helper/helper';

const Note = ({ note, setSelectedNote }: {note: any, focusRef: {current: {}}, setSelectedNote: ()=>{}}) => {
    const { focusRef } = useContext(UserContext);

    return <div className={`note ${focusRef.current == note.id && "focus"}`} onClick={() => {
        // @ts-ignore
        setSelectedNote(note);
        if (focusRef.current == note.id) {
            setSelectedNote(null);
            focusRef.current = undefined;
        } else {
            setSelectedNote(note);
            focusRef.current = note.id;
        }
    }}>
        <p>{note?.text}</p>
        {note?.timestamp && <p>Made {calculateTime(note?.timestamp)} ago</p>}
    </div>
}

export default Note;