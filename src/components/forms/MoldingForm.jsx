import React from 'react'

const MoldingForm = ({handleChange}) => {
  return (
    <>
      <input type='text' placeholder='Defects' name='equipment' value='Fico AMS-I306' onChange={handleChange} defaultValue=''/>
      <select type='text' name='tool' onChange={handleChange}>
        <option value="" disabled selected>Tool...</option>
        <option value='ToolMD1'>ToolMD1</option>
        <option value='ToolMD2'>ToolMD2</option>
        <option value='ToolMD3'>ToolMD3</option>
      </select>
      <select type='text' name='materials' onChange={handleChange} defaultValue=''>
        <option value="" disabled selected>Materials...</option>
        <option value='matMD1'>matMD1</option>
        <option value='matMD2'>matMD2</option>
        <option value='matMD3'>matMD3</option>
      </select>
    </>
  )
}

export default MoldingForm