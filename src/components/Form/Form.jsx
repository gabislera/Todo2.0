import { useContext, useEffect, useState } from 'react'
import DateInput from './DateInput'
import SelectInput from './SelectInput'
import TextAreaInput from './TextAreaInput'
import TaskInput from './TaskInput'
import { useTodoList } from '../../hooks/useTodoList'

const todayDate = new Date()

const Form = ({ onCloseModal }) => {
  const { addTodo, currentTodo, editTodo, setCurrentTodo } = useTodoList()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [dateValue, setDateValue] = useState(todayDate)
  const [priority, setPriority] = useState('baixa')

  useEffect(() => {
    if (currentTodo) {
      setTitle(currentTodo.title)
      setDescription(currentTodo.description)
      setDateValue(currentTodo.dateValue)
      setPriority(currentTodo.priority)
    }
  }, [currentTodo])

  const handleDropDown = ({ target }) => {
    setPriority(target.value)
  }

  const handleDate = ({ target }) => {
    const date = new Date(target.value)
    date.setHours(date.getHours() + 3)
    setDateValue(date)
  }

  const handleTitle = ({ target }) => {
    setTitle(target.value)
  }

  const handleDescription = ({ target }) => {
    setDescription(target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const todoData = {
      title,
      dateValue,
      priority,
      description,
      checked: false
    }
    if (currentTodo) {
      editTodo({
        ...todoData,
        id: currentTodo.id
      })
      setCurrentTodo('')
    } else {
      addTodo(todoData)
    }
    onCloseModal()
  }

  return (
    <div className='flex flex-col gap-10 pb-5 flex-wrap'>
      <h1 className='mx-5 mt-5 font-roboto font-normal'>Qual a sua próxima tarefa?</h1>
      <div className='flex'>
        <form className='flex flex-col mx-5 gap-5' onSubmit={handleSubmit}>
          <TaskInput value={title} onChange={handleTitle} />
          <TextAreaInput value={description} onChange={handleDescription} />
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