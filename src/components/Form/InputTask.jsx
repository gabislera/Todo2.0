import { useContext, useState } from 'react'
import { UserContext } from '../../UserContext'

const InputTask = () => {
  const [input, setInput] = useState('')
  const { todo } = useContext(UserContext)

  const handleChange = ({ target }) => {
    setInput(target.value)
  }

  return (
    <div className='flex flex-col'>
      <label className='text-[.9rem]' htmlFor='task'>Nova Tarefa</label>
      <input
        type="text"
        required
        placeholder='Tarefa'
        id='task'
        autoFocus
        value={input}
        onChange={handleChange}
        className='mt-2 border-solid border-[.5px] rounded text-[0.8rem] py-1 px-3 focus:outline-action' />
    </div>
  )
}

export default InputTask