import { useEffect } from 'react'
import Form from '../Form/Form'
import { useTodoList } from '../../hooks/useTodoList'

const Modal = ({ showModal, onCloseModal }) => {
  const { addTodo } = useTodoList()

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onCloseModal()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onCloseModal])

  const onSubmit = (todoData) => {
    addTodo(todoData)
    onCloseModal()
  }

  if (!showModal) return <></>
  return (
    <div className="flex w-screen h-screen absolute bg-black/40 top-0 left-0 z-[1] overflow-hidden">
      <div className='w-96 h-max rounded-xl bg-white absolute top-28 left-1/2 -translate-x-2/4 shadow-xl lg:w-max'>
        <Form
          onCloseModal={onCloseModal}
          buttonText='Adicionar'
          onSubmit={onSubmit} />
      </div>
      <div className='w-screen h-screen' onClick={onCloseModal}></div>
    </div >
  )
}

export default Modal