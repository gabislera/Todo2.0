import { useContext } from 'react'
import { UserContext } from '../../UserContext'

const TotalTodoInfo = () => {
  const { handleModal, todos } = useContext(UserContext)

  const checkedTotos = todos.filter((todo) => todo.checked)

  return (
    <div className=' bg-secondary rounded-lg p-3 flex flex-col gap-5'>
      <h1 className='text-xl'>Tarefas</h1>
      <div className='flex justify-between items-end'>
        <div className='flex gap-5'>
          <div className='flex flex-col items-center'>
            <h1 className='text-[.6rem]'>Total</h1>
            <div className='border-2 rounded-full border-black w-16 h-16 flex justify-center items-center text-[2rem]'>
              <h1>{todos.length}</h1>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <h1 className='text-[.6rem]'>Concluídas</h1>
            <div className='border-2 rounded-full border-black w-16 h-16 flex justify-center items-center text-[2rem]'>
              <h1>{checkedTotos.length}</h1>
            </div>
          </div>
        </div>
        <button onClick={handleModal} className='bg-action rounded w-max py-1 px-4  text-white'>Nova Tarefa</button>
      </div>
    </div>
  )
}

export default TotalTodoInfo