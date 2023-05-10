import { useContext, useState } from 'react'
import { UserContext } from '../../UserContext'
import DateInput from './DateInput'
import SelectInput from './SelectInput'
import TextAreaInput from './TextAreaInput'
import TaskInput from './TaskInput'

const todayDate = new Date()

const Form = () => {
  const [input, setInput] = useState('')
  const [dateValue, setDateValue] = useState(todayDate)
  const [priority, setPriority] = useState('')
  const { todo, addTodo, id } = useContext(UserContext)

  const handleDropDown = ({ target }) => {
    setPriority(target.value)
  }

  const handleDate = ({ target }) => {
    const date = new Date(target.value)
    date.setHours(date.getHours() + 3)
    setDateValue(date)
  }

  const handleChange = ({ target }) => {
    setInput(target.value)
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
      <div className='flex'>
        <form className='flex flex-col mx-5 gap-5' onSubmit={handleSubmit}>
          <TaskInput value={input} onChange={handleChange} />
          <TextAreaInput />
          <div className='flex justify-between gap-8'>
            <SelectInput value={priority} onChange={handleDropDown} />
            <DateInput value={dateValue} onChange={handleDate} />
            <button className='bg-action rounded w-max py-1 px-4 mt-5 text-white'>Adicionar</button>
          </div>
        </form>
      </div>
    </div >
  )
}

export default Form