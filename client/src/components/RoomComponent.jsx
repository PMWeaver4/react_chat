import React, {useState, useEffect} from 'react'

export const RoomComponent = () => {
    const [userText, setUserText] = useState("");
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

             setallRoom(json.Results);   
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
                await fetch("http://localhost:7000/room/create", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("MyToken")}`,
                    },
                    body: JSON.stringify({
                        text: userText
                    })
                })
            ).json();

          if(json.created){
            setStatus("Room Created");
          }  
        }catch (err) {
            console.log(err);
        }
    };

    const displayallRoom = () => {
      console.log( allRoom);
        return allRoom?.map(i => (
            <div style={{ border: ".5em solid white"}} key={i._id}>
                <p>
                    <b>{i.text}</b>
                </p>
            </div>
       ))
       .reverse();
    };


    return (
    <div>
        <h1>Rooms</h1>
        <input onChange={(e) => setUserText(e.target.value)} />
        <button onClick={handleSubmit}>Create a room</button>


        <h2>All Rooms</h2>
        {displayallRoom()}
        <div>
            {}
        </div>
    </div>
  );
};
