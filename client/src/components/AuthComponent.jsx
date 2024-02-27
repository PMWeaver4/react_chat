import React from 'react'

export const AuthComponent = ({handleChange, handleSignup}) => {
  return( <div>
      <form style={{display: "flex", flexDirection: "column"}}>
          <h2>Signup</h2>
          <label>FirstName</label>
          <input onChange={(e)=>handleChange("first", e.target.value)} />
          <label>LastName</label>
          <input onChange={(e)=>handleChange("last", e.target.value)} />
          <label>Email</label>
          <input onChange={(e)=>handleChange("email", e.target.value)}/>
          <label>Password</label>
          <input onChange={(e)=>handleChange("password", e.target.value)}/>
          <button type="button" onClick={handleSignup}>Signup!</button>
      </form>

  </div>
  )
}


