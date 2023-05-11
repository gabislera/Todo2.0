import { useContext } from 'react'
import { BsPlusLg } from 'react-icons/bs'
import { UserContext } from '../../UserContext'

const Todo = ({ description, checked, todo, isActive, handleTodoClick }) => {
  const { updateChecked, setCurrentTodo } = useContext(UserContext)

  const handleChecked = () => {
    updateChecked(todo)
  }

  const handleClick = () => {
    // console.log('mostrar a Todo selecionada:', description)
    setCurrentTodo(todo)
    handleTodoClick(todo.id)
  }

  return (
    <div onClick={handleClick} className={`bg-primary h-11 flex justify-between items-center rounded-sm text-secondary p-2 m-2 ${isActive ? 'scale-95' : ''} transition-all`}>
      <div className='flex items-center gap-2'>
        <label htmlFor="checkbox"></label>
        <input type="checkbox" id='checkbox' checked={checked} onChange={handleChecked} />
        <div className={checked ? 'capitalize line-through opacity-50' : 'capitalize'}>{description}</div>
      </div>
      <div>
        <BsPlusLg className='cursor-pointer hover:text-action' size={15} />
      </div>
    </div>
  )
}

export default Todo