import React, { useContext } from 'react'
import { UserContext } from '../../UserContext'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { MdOutlineCalendarToday } from 'react-icons/md'
import { BsExclamationDiamondFill } from 'react-icons/bs'
import Child from './Child'

const PRIORITY_COLOR = {
  'alta': 'red',
  'media': 'yellow',
  'baixa': 'green'
}

const TodoDate = () => {
  const { currentTodo, todos } = useContext(UserContext)
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  const date = new Date(currentTodo?.dateValue)
  const fullDate = date.toLocaleDateString('pt-BR', options)
  const time = date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  const color = PRIORITY_COLOR[currentTodo?.priority]

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
          </div>
          <div className='flex gap-10 items-center mt-4'>
            <Child currentTodo={currentTodo} deadline={time} description='Hora Da Tarefa' icon={<AiOutlineClockCircle size={22} />} />
            <Child currentTodo={currentTodo} deadline={fullDate} description='Dia Da Tarefa' icon={<MdOutlineCalendarToday size={22} />} />
            <Child currentTodo={currentTodo} deadline={currentTodo?.priority} description='Prioridade' icon={<BsExclamationDiamondFill fill={color} stroke={color} size={22} />} />
          </div>
        </div>
      }
    </div >
  )
}

export default TodoDate