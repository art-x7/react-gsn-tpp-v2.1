import React, { useState } from 'react'

import EquipmentForm from '../forms/processForms/EquipmentForm'
import MaterialForm from '../forms/processForms/MaterialForm'
import ToolForm from '../forms/processForms/ToolForm'
import UphForm from '../forms/processForms/UphForm'


const Process = ({processName}) => {

  const [processChoice, setProcessChoice ] = useState('')
  const handleChange = (e) => {
    setProcessChoice(e.target.value)
  }

  return (
    <div className='contForm wm'> 
      <h1>{processName}</h1>
      <form>
        <select value={processChoice} onChange={handleChange}> 
          <option value="" disabled selected >Choice...</option>
          <option value="Equipment">Equipment</option>
          <option value="Material">Material</option>
          <option value="Tool">Tool</option>
          <option value="UPH">UPH</option>
        </select>
      </form>
      { 
      (processChoice == 'Equipment') ? <EquipmentForm procName={processName}/> :
      (processChoice == 'Material') ? <MaterialForm procName={processName}/> :
      (processChoice == 'Tool') ? <ToolForm procName={processName}/> :
      (processChoice == 'UPH') ? <UphForm procName={processName}/> :
      '' 
      }
    </div>
  )
}

export default Process