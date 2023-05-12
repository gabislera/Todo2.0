import React from 'react'

const SelectInput = ({ value, onChange }) => {
  return (
    <div className='flex flex-col'>
      <label className='text-[0.85rem] text' htmlFor='priority'>Prioridade</label>
      <select value={value} onChange={onChange} className='mt-2 border-solid border-[.5px] rounded text-sm py-1 px-3 focus:outline-action'>
        <option value="baixa">baixa</option>
        <option value="media">média</option>
        <option value="alta">alta</option>
      </select>
    </div>
  )
}



export default SelectInput