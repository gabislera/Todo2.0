import React, { useContext } from 'react'
import { UserContext } from '../../UserContext'

const TodoDescription = () => {
  const { currentTodo, deleteTodo } = useContext(UserContext)

  const handleDelete = () => {
    deleteTodo(currentTodo)
  }

  if (currentTodo)
    return (
      <div className='h-max bg-secondary rounded-lg p-3 flex flex-col gap-5'>
        <div>
          <h1 className='text-xl'>Detalhes:</h1>
          {currentTodo.description}
        </div>
        <button onClick={handleDelete} className='bg-action rounded w-max py-1 px-4  text-white'>Excluir Tarefa</button>
      </div>
    )
}

export default TodoDescription