import React from 'react'

const Child = ({ currentTodo, description, icon, deadline }) => {
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