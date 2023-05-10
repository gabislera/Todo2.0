import React from 'react'

const DateTimeInput = ({ value, onChange }) => {
  return (
    <div className='flex flex-col'>
      <label className='text-[0.85rem]' htmlFor='date'>Selecione a data</label>
      <input type="datetime-local" onChange={onChange} id='date' value={value.toISOString().substring(0, 16)} className='mt-2 border-solid border-[.5px] rounded text-sm py-1 px-3 flex justify-end focus:outline-action' />
    </div>
  )
}

export default DateTimeInput