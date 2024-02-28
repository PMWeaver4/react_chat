import React from 'react'
import {useState, useEffect } from "react";

// Using "Input" for input text box
const Input = () => {
  const [results, setResults] = useState([]);
  
  useEffect(() => {
    const getInput = async () => {
      try {
        const response = await fetch(`localhost:{{PORT}}/product?min=0&max=100&tags=snack,electronics,gaming`, { 
          headers: {
            Authorization:`Bearer ${localStorage.getItem("MyToken")}`,
        },
      }
    );
      const json = await response.json()

          console.log(json);

      } catch(err){
        console.log(err);
      }

    }

    getProducts()
  }, []); 

  return <div>products</div>;
  
};

export default Product;
 
//export const RoomsComponent = () => {
//  return (
 //   <div>RoomsComponent</div>
//  )
//}


