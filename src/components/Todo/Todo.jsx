import { BiEdit } from 'react-icons/bi'
import { AiOutlineDelete } from 'react-icons/ai'
import { useTodoList } from '../../hooks/useTodoList'
import EditModal from '../EditModal/EditModal'
import { useState } from 'react'

const Todo = ({ description, checked, todo, isActive, handleTodoClick }) => {
  const { updateChecked, setCurrentTodo, currentTodo, deleteTodo } = useTodoList()
  const [showModal, setShowModal] = useState(false)

  const handleModal = () => {
    setShowModal((prevState) => !prevState)
    handleTodoClick(todo.id)
    setCurrentTodo(todo)
  }

  const handleChecked = () => {
    updateChecked(todo)
  }

  const handleDelete = () => {
    deleteTodo(currentTodo)
    setCurrentTodo(todo)
  }

  const handleClick = () => {
    setCurrentTodo(todo)
    handleTodoClick(todo.id)
  }

  return (
    <>
      <div className={`bg-primary h-11 flex justify-between items-center rounded-sm text-secondary p-2 m-2 ${isActive ? 'scale-95' : ''} transition-all`}>
        <div className='flex items-center gap-2'>
          <label htmlFor="checkbox"></label>
          <input type="checkbox" id='checkbox' checked={checked} onChange={handleChecked} />
          <div className={checked ? 'capitalize line-through opacity-50' : 'capitalize'}>{description}</div>
        </div>
        <span onClick={handleClick} className='h-full flex-1'></span>
        <div className='flex gap-1'>
          <BiEdit onClick={handleModal} size={18} className='cursor-pointer' />
          <AiOutlineDelete onClick={handleDelete} size={18} className='cursor-pointer' />
        </div>
      </div>
      <EditModal showModal={showModal} onCloseModal={handleModal} />
    </>
  )
}

export default Todo