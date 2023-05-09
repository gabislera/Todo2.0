import React, { useContext } from 'react'
import { UserContext } from '../../UserContext'

const TodoDescription = () => {
  const { currentTodo, deleteTodo } = useContext(UserContext)

  const handleDelete = () => {
    deleteTodo(currentTodo)
  }

  if (currentTodo)
    return (
      <div className='h-40 bg-secondary rounded-lg'>
        <div className='flex justify-between'>
          <div>
            <h1>Descrição detalhada da tarefa:</h1>
            {currentTodo.description}
            <p>outline na todo clicada</p>
            <p>seleção de hora</p>
          </div>
          <button onClick={handleDelete} className='bg-action rounded w-max py-1 px-4  text-white'>Excluir Tarefa</button>
        </div>
      </div>
    )
}

export default TodoDescription