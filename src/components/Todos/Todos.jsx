import React, { useContext, useState } from 'react'
import Todo from '../Todo/Todo'
import { UserContext } from '../../UserContext'

const checkedSort = (todo) => todo.checked ? 1 : -1

const Todos = () => {
  const { todos } = useContext(UserContext)
  const [activeTodoId, setActiveTodoId] = useState()

  const sortedTodos = [
    ...todos.filter((todo) => !todo.checked).sort(checkedSort),
    ...todos.filter((todo) => todo.checked).sort(checkedSort)
  ]

  const handleTodoClick = (id) => {
    setActiveTodoId(id)
  }

  return (
    <div className='h-max bg-secondary rounded-lg'>
      {sortedTodos.map(todo =>
        <Todo
          key={todo.id}
          description={todo.description}
          checked={todo.checked}
          todo={todo}
          isActive={activeTodoId === todo.id}
          handleTodoClick={handleTodoClick}
        />)}
    </div>
  )
}

export default Todos