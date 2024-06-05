import { useState, createContext, useRef } from "react";

// @ts-ignore
export const UserContext = createContext();

export const UserContextProvider = ({ children }: {children: any}) => {
  const [members, setMembers] = useState([]);
  const [notes, setNotes] = useState([])
  const [submit, setSubmit] = useState(false)
  const focusRef = useRef()

  // console.log("in UserContext!", members)
  // console.log("Notes in UserContext!", notes)
    

  const value = { members, setMembers, notes, setNotes, submit, setSubmit, focusRef };
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};
