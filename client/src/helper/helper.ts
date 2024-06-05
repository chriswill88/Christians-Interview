const addUser = async (userInfo: {}, setMembers: () => {}) => {
    // console.log("ADD USER!")
    const url = "http://localhost:3000/members";
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(userInfo)
    })
    // @ts-ignore
    setMembers(members => [...members, userInfo]);
    // console.log("user response ->", response, response.body)
    return response.json()
}

function makeid(length: number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

const cleanup = (focusRef: {current: any}, setSelectedNote: () => {}, setSubmit: () => {}) => {
    focusRef.current = undefined
    setSubmit(submit => !submit);
    setSelectedNote(null)
}

const postNote = async (noteInfo: {}, setSelectedNote: () => {}, setSubmit: () => {}, focusRef = {}) => {
    const url = "http://localhost:3000/notes";

    noteInfo.id = makeid(4)
    noteInfo.timestamp = Date.now()
    noteInfo.auditLog = [{
        note: noteInfo.text,
        timestamp: noteInfo.timestamp
    }];
    // console.log("in postNote")
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(noteInfo)
    })
    cleanup(focusRef, setSelectedNote, setSubmit)
    return response.json()
}

const updateNote = async(noteInfo: {}, setSelectedNote: () => {}, setSubmit: ()=>{}, focusRef) => {
    if (!noteInfo.id) {
        alert("Failed to update note! Select card before update!")
        return ;
    }

    if (!noteInfo.text) {
        alert("Failed to update note! Textbox is empty!")
        return ;
    }

    noteInfo.timestamp = Date.now()
    noteInfo.auditLog.push({
        note: noteInfo.text,
        timestamp: noteInfo.timestamp
    });

    const url = `http://localhost:3000/notes/${noteInfo.id}`;
    const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(noteInfo)
    })
    cleanup(focusRef, setSelectedNote, setSubmit)
    return response.json()
}

const calculateTime = (timestamp) => {
    const timeNow = new Date();
    const timePast = new Date(timestamp)

    const seconds = (timeNow.getTime() - timePast.getTime()) / 1000;

    if (seconds < 60) {
        return Math.floor(seconds) + " second(s)";
    } else if (seconds < 3600) {
        return Math.floor(seconds / 60) + " minute(s)";
    } else if (seconds < 86400) {
        return Math.floor(seconds / 3600) + " hour(s)";
    } else if (seconds < 2620800) {
        return Math.floor(seconds / 86400) + " day(s)";
    } else if (seconds < 31449600) {
        return Math.floor(seconds / 2620800) + " month(s)";
    } else {
        return Math.floor(seconds / 31449600) + " year(s)";
    }
}
export { addUser, postNote, updateNote, calculateTime, cleanup }