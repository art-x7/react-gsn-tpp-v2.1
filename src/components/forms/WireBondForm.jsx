import React from 'react'

const WireBondForm = ({handleChange}) => {
  return (
    <>
      <select type='text' name='equipment' onChange={handleChange} defaultValue=''>
        <option value="" disabled selected>Equipment...</option>
        <option value='WBO1'>WBO-1</option>
        <option value='WBO2'>WBO-2</option>
      </select>
      <select type='text' name='tool' onChange={handleChange} defaultValue=''>
        <option value="" disabled selected>Tool...</option>
        <option value='ToolWB1'>ToolWB1</option>
        <option value='ToolWB2'>ToolWB2</option>
        <option value='ToolWB3'>ToolWB3</option>
      </select>
      <select type='text' name='materials' onChange={handleChange} defaultValue=''>
        <option value="" disabled selected>Materials...</option>
        <option value='matWB1'>matWB1</option>
        <option value='matWB2'>matWB2</option>
        <option value='matWB3'>matWB3</option>
      </select>
    </>
  )
}

export default WireBondForm