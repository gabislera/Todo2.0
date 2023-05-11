import { useContext, useState } from 'react'
import { UserContext } from '../../UserContext'
import Modal from '../Modal/Modal'

const TodoDescription = () => {
  const { currentTodo, deleteTodo, _currentTodo } = useContext(UserContext)
  const [showModal, setShowModal] = useState(false)

  const handleModal = () => {
    setShowModal((prevState) => !prevState)
  }

  const handleDelete = () => {
    deleteTodo(currentTodo)
  }

  const handleEdit = () => {
    handleModal()
  }

  if (currentTodo)
    return (
      <>
        <div className='h-max bg-secondary rounded-lg p-3 flex flex-col gap-5'>
          <div>
            <h1 className='text-xl'>Detalhes:</h1>
            {currentTodo.description}
          </div>
          <div className='flex gap-2'>
            <button onClick={handleDelete} className='bg-action rounded w-max py-1 px-4  text-white'>Excluir</button>
            <button onClick={handleEdit} className='bg-action rounded w-max py-1 px-4  text-white'>Editar</button>
          </div>
        </div>
        <Modal showModal={showModal} onCloseModal={handleModal} />
      </>
    )
}

export default TodoDescription