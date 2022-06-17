import React, { useState } from 'react'


const TppForm = () => {

  const initialState = {
    tppProductName: '',
    tppStage: '',     
    tppOwner: '',
    tppStatus: '',
    tppComment: '',
  }
    
  const [formData, setFormData] = useState(initialState)
  
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value.trim()})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }
      
  return (
    <>
      <form>
        <input type='text' placeholder='Product Name' name='tppProductName' onChange={handleChange}/>
        <select type='text' name='tppStage' onChange={handleChange}>
          <option value="" disabled selected>Tpp Stage...</option>
          <option value='Single'>Single</option>
          <option value='Serial'>Serial</option>
        </select>
        <input type='text' placeholder='Product Owner' name='tppOwner' onChange={handleChange}/>
        <select type='text' name='tppStatus' onChange={handleChange}>
          <option value="" disabled selected>Status...</option>
          <option value='open'>Open</option>
          <option value='close'>Close</option>
        </select>
        <input type='text' placeholder='Comment' name='tppComment' onChange={handleChange}/>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </>
  )
}

export default TppForm