import { useState } from 'react'

const Dropdown = () => {
  const [dropDownValue, setDropDownValue] = useState('')

  const handleDropDown = ({ target }) => {
    setDropDownValue(target.value)
  }

  return (
    <div className='flex flex-col'>
      <label className='text-[0.9rem]' htmlFor='priority'>Selecione a prioridade</label>
      <select value={dropDownValue} onChange={handleDropDown} className='mt-2 border-solid border-[.5px] rounded text-sm py-1 px-3 focus:outline-action'>
        <option disabled value=""></option>
        <option value="baixa">baixa</option>
        <option value="media">média</option>
        <option value="alta">alta</option>
      </select>
    </div>
  )
}

export default Dropdown