import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

export const RoomComponent = () => {
    const [roomName, setRoomName] = useState("");
    const[roomDescription, setRoomDescription] = useState("");
    const[roomUsers, setRoomUsers] = useState([]);
    const [allRoom, setallRoom] = useState([]);
    const [status, setStatus] = useState("");
    const [allMessages, setAllMessages] = useState("");
    
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

    const getAllInRoom = async(roomID) => {
      try{
        const json = await(
          await fetch(`http://localhost:7000/message/get_room/${roomID}`,{
            headers: {
              Authorization: `Bearer ${localStorage.getItem("MyToken")}`,
          },
          
          }
        )).json();
        setAllMessages(json.Results);
          displayAllMessages();
        console.log(json.Results);

      } catch (err){
        console.log(err);
      }
    }

    const displayAllMessages = () => {
      console.log("something happend");
      return allMessages?.map(i => (
        <p key={i._id}>
          Message: <b>{i.body}</b>
          When: <b>{i.when}</b>
        </p>
      ))
    }

    const displayallRoom = () => {
      
        return allRoom?.map(i => (
            <div style={{ border: ".5em solid white"}} key={i._id}>
                <button onClick={()=>{getAllInRoom(i._id)}}>
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
