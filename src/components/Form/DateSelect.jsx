import { useState } from 'react'

const todayDate = new Date()

const DateSelect = () => {
  const [dateValue, setDateValue] = useState(todayDate)

  const handleDate = ({ target }) => {
    const date = new Date(target.value)
    date.setHours(date.getHours() + 3)
    setDateValue(date)
  }

  return (
    <div className='flex flex-col'>
      <label className='text-[0.9rem]' htmlFor='date'>Selecione a data</label>
      <input type="date" onChange={handleDate} id='date' className='mt-2 border-solid border-[.5px] rounded text-sm py-1 px-3 flex justify-end focus:outline-action' />
    </div>
  )
}

export default DateSelect