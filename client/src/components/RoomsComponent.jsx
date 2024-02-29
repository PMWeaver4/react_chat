import React, {useState, useEffect } from "react";

export const RoomsComponent = () => {
// creating a room for message
function roomComponent ({ roomId }) {

  const [messages, setMessages] = useState([]);
  const [createMessage, setCreateMessage] = useState([]);
    
    useEffect(() => {
      const fetchMessage = async () => {
        try {
          const response = await fetch(``,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("MyToken")}`,
            },
          }
          );
          const json = await response.json();
          
          console.log(json);
      } catch (err) {
        console.log(err);
      }
    };
      fetchMessage();
      }, []);

      return <div>room</div>;
  };
};  

//export default RoomComponent;
 
//  return (
 //   <div>RoomsComponent</div>
//  )
//}


