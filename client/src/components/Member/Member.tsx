import './Member.css'

function Member({id, firstName, lastName, setSelected}: {key: number, id: number, firstName: string, lastName: string, setSelected: () => {}}) {
    return (
        <div className="member-tile" onClick={() => {
            // @ts-ignore
            setSelected({
                id: id,
                firstName: firstName,
                lastName: lastName
            })
        }}>
            <p>{`${firstName} ${lastName}`}</p>
        </div>
    )
}

export default Member;