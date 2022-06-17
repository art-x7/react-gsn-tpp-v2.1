import React, { useState } from 'react'


const EquipmentForm = ({procName}) => {

  const initialState = {
    id: Date.now(),
    processName: {procName},
    equipmentName: '',     
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
      <h3>Equipment</h3>
      <form>
        <input value={formData.equipmentName} type='text' placeholder='Equipment Name' name='equipmentName' onChange={handleChange}/>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </>
  )
}

export default EquipmentForm