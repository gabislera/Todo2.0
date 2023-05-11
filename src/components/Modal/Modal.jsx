import { useEffect } from 'react'
import Form from '../Form/Form'

const Modal = ({ showModal, onCloseModal }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onCloseModal()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onCloseModal])

  if (!showModal) return <></>
  return (
    <div className="flex w-screen h-screen absolute bg-black/40 top-0 left-0 z-[1] overflow-hidden">
      <div className='w-max h-max rounded-xl bg-white absolute top-1/4 left-1/2 -translate-x-2/4 shadow-xl'>
        <Form onCloseModal={onCloseModal} />
      </div>
      <div className='w-screen h-screen' onClick={onCloseModal}></div>
    </div>
  )
}

export default Modal