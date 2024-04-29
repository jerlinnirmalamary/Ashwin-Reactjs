import React from 'react'

function ControlCom() {
    
   const handleChange = () => {

    }
  return (
    <form>
        <label htmlFor="username"> Name: 
        <input name='username' placeholder='Enter the name' onChange={handleChange}/>
        </label>
        <label htmlFor="password"> password: 
        <input type="password" placeholder='Enter the password' onChange={handleChange}/>
        </label>
    </form>
  )
}

export default ControlCom;