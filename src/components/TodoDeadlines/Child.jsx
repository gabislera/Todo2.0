import React from 'react'

const Child = ({ currentTodo, description, icon }) => {
  return (
    <div>
      <h1 className='text-xs'>{description}</h1>
      <div className='flex gap-2 mt-1'>
        {currentTodo && icon}
        <p>{currentTodo ? '12:23' : '--'}</p>

      </div>
    </div>
  )
}

export default Child