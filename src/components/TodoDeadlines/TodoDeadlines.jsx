import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../UserContext'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { MdOutlineCalendarToday } from 'react-icons/md'
import { BsExclamationDiamondFill } from 'react-icons/bs'
import { BiEdit } from 'react-icons/bi'
import DeadlineEdit from './DeadlineEdit'
import Child from './Child'

const PRIORITY_COLOR = {
  'alta': 'red',
  'media': 'yellow',
  'baixa': 'green'
}

const TodoDate = () => {
  const [viewEdit, setViewEdit] = useState(false)
  const { currentTodo, todos } = useContext(UserContext)
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  const date = new Date(currentTodo.date)
  const fullDate = date.toLocaleDateString('pt-BR', options)
  const time = date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  const color = PRIORITY_COLOR[currentTodo.priority]

  const handleEdit = () => {
    setViewEdit((prevState) => !prevState)
  }

  return (
    <div className='h-max bg-secondary rounded-lg p-3 flex flex-col gap-5'>
      {!todos.length ?
        <div>
          <h1 className='text-xl'>Você ainda não possui tarefas criadas</h1>
          <p className='text-sm'>Clique em Nova Tarefa para começar</p>
        </div> :

        <div>
          <div className='flex items-center justify-between'>
            <h1 className='text-xl'>Prazos</h1>
            <BiEdit className='cursor-pointer' onClick={handleEdit} />
          </div>

          {/* TRANSFORMAR EM COMPONENTES */}
          <div className='flex gap-10 items-center mt-4'>
            {/* <Child currentTodo={currentTodo} /> */}
            <div>
              <h1 className='text-xs'>Hora da tarefa</h1>
              <div className='flex gap-2 mt-1'>
                {currentTodo && <AiOutlineClockCircle size={22} />}
                <p>{currentTodo ? time : '--'}</p>
              </div>
            </div>
            <div>
              <h1 className='text-xs'>Data da tarefa</h1>
              <div className='flex gap-2 mt-1'>
                {currentTodo && <MdOutlineCalendarToday size={22} />}
                <p>{currentTodo ? fullDate : '--'}</p>
                {/* <MdOutlineCalendarToday size={22} />
                {currentTodo ? fullDate : 'Selecione uma tarefa'} */}
              </div>
            </div>
            <div>
              <h1 className='text-xs mt-1'>Prioridade</h1>
              <div className='flex gap-2 mt-1'>
                {currentTodo && <BsExclamationDiamondFill fill={color} stroke={color} size={22} />}
                <p className='capitalize'>{currentTodo ? currentTodo.priority : '--'}</p>
              </div>
            </div>
          </div>
          {viewEdit && <DeadlineEdit />}
        </div>
      }
    </div >
  )
}

export default TodoDate