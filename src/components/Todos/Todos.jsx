import React, { useContext, useEffect } from 'react'
import Todo from '../Todo/Todo'
import { UserContext } from '../../UserContext'

const checkedSort = (todo) => todo.checked ? 1 : -1

const Todos = () => {
  const { todos } = useContext(UserContext)

  const sortedTodos = [
    ...todos.filter((todo) => !todo.checked).sort(checkedSort),
    ...todos.filter((todo) => todo.checked).sort(checkedSort)
  ]

  return (
    <div className='h-max bg-secondary rounded-lg'>
      {sortedTodos.map(todo =>
        <Todo
          key={todo.id}
          description={todo.description}
          checked={todo.checked}
          todo={todo} />)}
    </div>
  )
}

export default Todos