import React, { useState } from 'react'


const ToolForm = ({procName}) => {

  const initialState = {
    id: Date.now(),
    processName: {procName},
    toolName: '',
  }
    
  const [formData, setFormData] = useState(initialState)
  
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value.trim()})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    setFormData(initialState)
  }
      
  return (
    <>
      <form>
        <h3>Tool</h3>
        <input value={formData.toolName} type='text' placeholder='Tool Name' name='toolName' onChange={handleChange}/>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </>
  )
}

export default ToolForm