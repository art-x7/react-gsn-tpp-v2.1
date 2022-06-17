import React, { useState } from 'react'


const MaterialForm = ({procName}) => {

  const initialState = {
    id: Date.now(),
    processName: {procName},
    materialName: '',
    unitName: '',
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
        <h3>Materials</h3>
        <input value={formData.materialName} type='text' placeholder='Material Name' name='materialName' onChange={handleChange}/>
        <input value={formData.unitName} type='text' placeholder='Unit' name='unitName' onChange={handleChange}/>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </>
  )
}

export default MaterialForm