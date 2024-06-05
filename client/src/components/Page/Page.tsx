import { useContext, useEffect, useState } from 'react';
import Member from '../Member/Member';
import SearchBar from '../SearchBar/SearchBar';
import './Page.css';
import { useQuery } from '@tanstack/react-query';
import CreateUser from '../CreateUser/CreateUser';
import { UserContext } from '../../Providers/UserContext';
import Header from '../Header/Header';
import Notes from '../Notes/Notes';


interface MemberType {
    id: number,
    firstName: string,
    lastName: string
}

function Page() {
    // @ts-ignore
    const {members, setMembers} = useContext(UserContext)
    const [displayCreate, setDisplayCreate] = useState(false)
    const [searchWord, setSearchWord] = useState('');
    // const [displayInfo, setDisplayInfo] = useState(false);
    const [selected, setSelected] = useState(null);

    // @ts-ignore
    const { isPending, error, data } = useQuery({
    queryKey: ['membersData'],
    queryFn: async () => {
            const res = await fetch('http://localhost:3000/members').then((res) => 
                res.json()
            )
            setMembers(res);
            return res
        },
    },)

    if (isPending) return "Loading...";

    if (error) return "Error";

    const handleSearch = (member: MemberType) => {
        if (`${member.firstName} ${member.lastName}`.toLowerCase().includes(searchWord)) return true;
        // if (member.firstName.toLowerCase().includes(searchWord) || member.lastName.toLowerCase().includes(searchWord)) return true;
        return false;
    }

    // @ts-ignore
    const memComp = members.filter((member: MemberType) => 
        handleSearch(member) && member 
    ).map((member: MemberType) => <Member key={member.id} id={member.id} firstName={member.firstName} lastName={member.lastName} setSelected={setSelected} />)

    return (
        <div className="pageContainer">
            <Header />
            <hr/>
            <div className='mainContainer'>
                {
                    displayCreate && <CreateUser setDisplayCreate={setDisplayCreate} />
                }
                <div className='member-container'>
                    <p><span className='createUserButton' onClick={() => {setDisplayCreate(true)}}>Create New User</span> or Search below.</p>
                    <SearchBar setSearchWord={setSearchWord}/>

                    <h3>Choose a user below</h3>
                    <div className='tile-container'>
                    {
                        memComp.length ? memComp : <div>
                            <p>No Result.</p>
                            <div className='createUserButton' onClick={() => {setDisplayCreate(true)}}> Create a new user?</div>
                        </div>
                    }
                    </div>
                </div>
                <hr />
                {<Notes selected={selected}/>}
            </div>
        </div>
    )
}

export default Page