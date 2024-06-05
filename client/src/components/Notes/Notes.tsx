import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../Providers/UserContext";
import Note from "../Note/Note";
import CreateNote from "../CreateNote/CreateNote";
import "./Notes.css"
import AuditLog from "../AuditLog/AuditLog";


const Notes = ({selected}: {selected: any}) => {
    const [selectedNote, setSelectedNote] = useState();
    // @ts-ignore
    const { notes, setNotes, submit, focusRef} = useContext(UserContext);

    // @ts-ignore
    const { isPending, error, data, refetch } = useQuery({
        queryKey: ['notes'],
        queryFn: async () => {
            const res = await fetch('http://localhost:3000/notes').then((res) => 
                res.json()
            )
            setNotes(res.filter((note: any) => note.member === selected.id));
            return res
        },
    },)

    useEffect(() => {
        setSelectedNote(null);
        focusRef.current = undefined
        refetch()
    }, [selected, submit])

    if (!selected) {
        return <div className="notePage">
            <p>click on tile to render notes</p>
        </div>
    }

    return <div className="notePage">
        <div>
            <h2>{`${selected.firstName} ${selected.lastName}`}</h2>
            <p>Click on Tile to edit note or <span>create new note</span></p>
        </div>
        <div className="notesContainer">
            {
                notes.length ? notes?.map((note: any, ind: number) => <Note key={ind} note={note} setSelectedNote={setSelectedNote} />) : <div>
                    <p>No Results</p>
                    <div>Create a note below.</div>
                </div>
            }
        </div>
        {
            notes?.length ? <AuditLog selectedNote={selectedNote}/> : <></>
        }
        <CreateNote member={selected.id} selectedNote={selectedNote} setSelectedNote={setSelectedNote} setNotes={setNotes}/>
    </div>
}

export default Notes;