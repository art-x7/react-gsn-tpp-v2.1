import React from 'react'

const AttachPrintForm = ({handleChange}) => {
  return (
    <>
      <select type='text' name='equipment' onChange={handleChange} defaultValue=''>
        <option value="" disabled selected>Equipment...</option>
        <option value='AP1'>AP-1</option>
        <option value='AP-2'>AP-2</option>
      </select>
      <select type='text' name='tool' onChange={handleChange} defaultValue=''>
        <option value="" disabled selected>Tool...</option>
        <option value='ToolAP1'>ToolAP1</option>
        <option value='ToolAP2'>ToolAP2</option>
        <option value='ToolAP3'>ToolAP3</option>
      </select>
      <select type='text' name='materials' onChange={handleChange} defaultValue=''>
        <option value="" disabled selected>Materials...</option>
        <option value='matAP1'>matAP1</option>
        <option value='matAP2'>matAP2</option>
        <option value='matAP3'>matAP3</option>
      </select>
    </>
  )
}

export default AttachPrintForm