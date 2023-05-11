import React from 'react'

const TextAreaInput = ({ value, onChange }) => {
  return (
    <div className='flex flex-col'>
      <label className='text-[.85rem]' htmlFor='details'>Detalhes</label>
      <textarea
        draggable={false}
        name="details"
        id="details"
        cols="30"
        rows="3"
        value={value}
        onChange={onChange}
        className='mt-2 border-solid border-[.5px] rounded text-sm py-1 px-3 focus:outline-action'></textarea>
    </div>
  )
}

export default TextAreaInput