import React from 'react'
import { useTodoList } from '../../hooks/useTodoList'

const Child = ({ currentTodo, description, icon, deadline }) => {
  const { activeId } = useTodoList()

  return (
    <div>
      <h1 className='text-xs'>{description}</h1>
      <div className='flex gap-2 mt-1'>
        {currentTodo && icon}
        <p>{currentTodo ? deadline : '--'}</p>
      </div>
    </div>
  )
}

export default Child