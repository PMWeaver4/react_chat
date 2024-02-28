import React from 'react'
import {useState, useEffect } from "react";

// creating a room for message
function Room ({ roomId }) {

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
    

export default Room;
 
//export const RoomsComponent = () => {
//  return (
 //   <div>RoomsComponent</div>
//  )
//}


