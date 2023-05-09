import { useContext, useState } from 'react'
import { UserContext } from '../../UserContext'

const todayDate = new Date()

const Form = () => {
  const [input, setInput] = useState('')
  const [dateValue, setDateValue] = useState(todayDate)
  const [priority, setPriority] = useState('baixa')
  const { todo, addTodo, id } = useContext(UserContext)

  const handleDate = ({ target }) => {
    const date = new Date(target.value)
    date.setHours(date.getHours() + 3)
    setDateValue(date)
  }

  const handleChange = ({ target }) => {
    setInput(target.value)
  }

  const handleDropDown = ({ target }) => {
    setPriority(target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    todo.description = input
    todo.id = id
    todo.date = dateValue
    todo.priority = priority
    addTodo(todo)
  }

  return (
    <div className='flex flex-col gap-10 pb-5 flex-wrap'>
      <h1 className='mx-5 mt-5 font-roboto font-normal'>Qual a sua próxima tarefa?</h1>
      <form className='flex flex-col mx-5 gap-5' onSubmit={handleSubmit}>
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

        <div className='flex justify-between gap-8'>
          <div className='flex flex-col'>
            <label className='text-[0.9rem]' htmlFor='priority'>Selecione a prioridade</label>
            <select value={priority} onChange={handleDropDown} className='mt-2 border-solid border-[.5px] rounded text-sm py-1 px-3 focus:outline-action'>
              <option disabled value=""></option>
              <option value="baixa">baixa</option>
              <option value="media">média</option>
              <option value="alta">alta</option>
            </select>
          </div>

          <div className='flex flex-col'>
            <label className='text-[0.9rem]' htmlFor='date'>Selecione a data</label>
            <input type="datetime-local" onChange={handleDate} id='date' className='mt-2 border-solid border-[.5px] rounded text-sm py-1 px-3 flex justify-end focus:outline-action' />
          </div>
          <button className='bg-action rounded w-max py-1 px-4 mt-5 text-white'>Adicionar</button>
        </div>
      </form>
    </div>
  )
}

export default Form