import React, { useState } from 'react'

import AttachPrintForm from './AttachPrintForm'
import MoldingForm from './MoldingForm'
import WireBondForm from './WireBondForm'


const MainForm = () => {

  const initialState = {
    productName: '',
    processName: '',
    recipe: '',
    lotNumber: '',
    qtyIn: '',
    qtyOut: '',
    defects: '',
    uph: '',
    equipment: '',
    tool: '',
    materials: '',
    comment: '',
  }
    
  const [formData, setFormData] = useState(initialState)
  const [checkProcess, setCheckProcess] = useState()
  
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value.trim()})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormData(initialState)
  }
    
  const getProcessName = (e) => {
    setCheckProcess(e.target.value)
  }

  const myArrayForms = [
    {id: 1, name: 'AP', form: <AttachPrintForm handleChange={handleChange}/> },
    {id: 2, name: 'WB', form: <WireBondForm handleChange={handleChange}/> },
    {id: 3, name: 'MD', form: <MoldingForm handleChange={handleChange}/> },
  ]

  const equalProcess = () => {
    const process = myArrayForms.find(pro => pro.name == checkProcess)
    return process ? process.form : ''
  }
  const processFunctions = (e) => {
    getProcessName(e);
    handleChange(e);
  }
  
  return (
    <>
      <form className='mainform'>
        <select type='text' name='productName' onChange={handleChange} defaultValue=''>
          <option value="" disabled selected>Product...</option>
          <option value='GS1'>GS1</option>
          <option value='Micron'>Micron</option>
          <option value='Nand'>Nand</option>
        </select>
        <select type='text' name='processName' onChange={processFunctions} value={checkProcess} defaultValue=''>
          <option value="" disabled selected>Process...</option>
          <option value='AP'>Attach Print</option>
          <option value='WB'>Wire Bond</option>
          <option value='MD'>Molding</option>
        </select>
        <input value={formData.recipe} type='text' placeholder='Recipe' name='recipe' onChange={handleChange}/>
        <input value={formData.lotNumber} type='text' placeholder='Lot Number' name='lotNumber' onChange={handleChange}/>
        <input value={formData.qtyIn} type='text' placeholder='Q-ty in' name='qtyIn' onChange={handleChange}/>
        <input value={formData.qtyOut} type='text' placeholder='Q-ty out' name='qtyOut' onChange={handleChange}/>
        <input value={formData.defects} type='text' placeholder='Defects' name='defects' onChange={handleChange}/>
        <input value={formData.uph} type='text' placeholder='UPH' name='uph' onChange={handleChange}/>
        
        { equalProcess() }
        
        <textarea placeholder='Comments' name='comments' onChange={handleChange}/>
        <button onClick={handleSubmit}>Send</button>
      </form>
    </>
  )
}

export default MainForm








