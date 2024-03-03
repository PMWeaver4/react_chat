import React, {useState, useEffect} from 'react'

export const RoomsComponent = () => {

const [displayRooms, setDisplayRooms] = useState("");

  const showRooms = async() => {
    try {
      setDisplayRooms("zippity doo dah")
    } catch (err){
      console.log(err);
    }
  }
  
  return (
    {displayRooms},
    <div>RoomsComponent</div>
    
  )
}