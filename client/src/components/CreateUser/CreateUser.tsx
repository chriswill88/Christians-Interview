import { useContext, useRef } from "react"
import "./CreateUser.css"
import { addUser } from "../../helper/helper";
import { UserContext } from "../../Providers/UserContext";

const CreateUser = ({ setDisplayCreate }: {setDisplayCreate: any}) => {
    const userInfo = useRef({});
    // @ts-ignore
    const { setMembers } = useContext(UserContext)

    const handleChange = (event: any) => {
        const name: string = event.target.name;
        const value: string = event.target.value;
        // @ts-ignore
        userInfo.current[name] = value
    }

    return <div className="createUserContainer">
        <h3>Complete Prompts to create New User.</h3>

        <div className="createUserForm" >
            <label>
                First Name: <input name="firstName" onChange={handleChange} type="text" placeholder="First Name"/>
            </label>
            <label>
                Last Name: <input name="lastName" onChange={handleChange} type="text" placeholder="Last Name"/>
            </label>
            <p className="submitButton" onClick={() => {
                addUser(userInfo.current, setMembers)
                setDisplayCreate(false)
            }} >Submit</p>
            <p className="submitButton" onClick={() => {setDisplayCreate(false)}}>Close</p>
        </div>
    </div>
}

export default CreateUser;