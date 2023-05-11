import './App.css'
import TodoDate from './components/TodoDeadlines/TodoDeadlines'
import TodoDescription from './components/TodoDescription/TodoDescription'
import Todos from './components/Todos/Todos'
import TotalTodoInfo from './components/TotalTodoInfo/TotalTodoInfo'
import { UserStorage } from './UserContext'

function App() {
  return (
    <div className=' bg-primary h-screen' >
      <UserStorage>
        <div className='p-5 grid grid-cols-1 max-w-screen-lg m-auto gap-5 pt-10 lg:grid-cols-2'>
          <TotalTodoInfo />
          <TodoDate />
          <Todos />
          <TodoDescription />
        </div >
      </UserStorage>
    </div >
  )
}

export default App
