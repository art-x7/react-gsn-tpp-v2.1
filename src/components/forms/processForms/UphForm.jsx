import React, { useState } from 'react'


const UphForm = ({procName}) => {

  const initialState = {
    id: Date.now(),
    processName: {procName},
    prodName: '',
    uph: '',
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
        <h3>UPH</h3>
        <select value={formData.prodName} name='prodName' onChange={handleChange}>
          <option value="" disabled selected>Product...</option>
          <option value='GS1'>GS1</option>
          <option value='Micron'>Micron</option>
          <option value='Nand'>Nand</option>
        </select>
        <input value={formData.uph} type='text' placeholder='UPH' name='uph' onChange={handleChange}/>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </>
  )
}

export default UphForm