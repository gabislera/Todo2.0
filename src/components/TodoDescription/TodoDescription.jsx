import { useTodoList } from '../../hooks/useTodoList'

const TodoDescription = () => {
  const { currentTodo, activeTodoId } = useTodoList()

  if (currentTodo && activeTodoId)
    return (
      <>
        <div className='h-max bg-secondary rounded-lg p-3 flex flex-col gap-5'>
          <div>
            <h1 className='text-xl'>Detalhes:</h1>
            {currentTodo.description}
          </div>
        </div>
      </>
    )
}

export default TodoDescription