import { useEffect, useRef } from 'react'
import Todo from '../Todo/Todo'
import { useTodoList } from '../../hooks/useTodoList'

const checkedSort = (todo) => todo.checked ? 1 : -1

const Todos = () => {
  const { todos, activeTodoId, setActiveTodoId } = useTodoList()
  const todoRef = useRef()

  const sortedTodos = [
    ...todos.filter((todo) => !todo.checked).sort(checkedSort),
    ...todos.filter((todo) => todo.checked).sort(checkedSort)
  ]

  const handleTodoClick = (id) => {
    setActiveTodoId(id)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (todoRef.current && !todoRef.current.contains(event.target)) {
        setActiveTodoId(null)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <div className='h-max bg-secondary rounded-lg ' ref={todoRef}>
      {sortedTodos.map(todo =>
        <Todo
          key={todo.id}
          description={todo.title}
          checked={todo.checked}
          todo={todo}
          isActive={activeTodoId === todo.id}
          handleTodoClick={handleTodoClick}
        />)}
    </div>
  )
}

export default Todos