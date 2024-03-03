import React, {useState, useEffect} from 'react'


export const RoomComponent = () => {
    const [roomName, setRoomName] = useState("");
    const[roomDescription, setRoomDescription] = useState("");
    const[roomUsers, setRoomUsers] = useState([]);
    const [allRoom, setallRoom] = useState([]);
    const [status, setStatus] = useState("");

    useEffect(() => {
        
        const getallRoom = async () => {
            try{
                const json = await (
                    await fetch("http://localhost:7000/room/all", {
                       headers: {
                        Authorization: `Bearer ${localStorage.getItem("MyToken")}`,
                       }, 
                    })
                ).json();

             setallRoom(json.Created); 
                    console.log(json);
            }catch(err){
                console.log(err);
            }
        };

        getallRoom();
    }, [status]); 

    const handleSubmit = async () => {
        try {
            setStatus("Loading");
            const json = await (
                await fetch("http://localhost:7000/room/create/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("MyToken")}`,
                    },
                    body: JSON.stringify({
                        name: roomName,
                        description: roomDescription,
                        addedUsers: roomUsers
                    })
                })
            ).json();
                console.log(json.Created);
          if(json.created){
            setStatus("Room Created");
          }  
        }catch (err) {
            console.log(err);
        }
    };

    const displayallRoom = () => {
      
        return allRoom?.map(i => (
            <div style={{ border: ".5em solid white"}} key={i._id}>
                <button onClick={()=>{console.log(`Get all the messages in [${i.name}] whos unique Mongoose Room ID is${i._id}`)}}>
                   Room Name: <b>{i.name}</b>
                </button>
            </div>
       ))
       .reverse();
    };


    return (
    <div>
        <h1>Rooms</h1>
        <form>

        <input onChange={(e) => setRoomName(e.target.value)} placeholder='Room Name'/>
        <br/>
        <input onChange={(e) => setRoomDescription(e.target.value)} placeholder='Room Description' />
        <br/>
        <input onChange={(e) => setRoomUsers(e.target.value) } placeholder='Added Users' />
        <br/>
        <button onClick={handleSubmit}>Create a room</button>
        </form>


        <h2>All Rooms</h2>
        {displayallRoom()}
        <div>
            {}
        </div>
    </div>
  );
};
