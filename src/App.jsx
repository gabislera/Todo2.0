import './App.css'
import Modal from './components/Modal/Modal'
import TodoDate from './components/TodoDeadlines/TodoDeadlines'
import TodoDescription from './components/TodoDescription/TodoDescription'
import Todos from './components/Todos/Todos'
import Header from './components/Header/Header'
import TotalTodoInfo from './components/TotalTodoInfo/TotalTodoInfo'
import { UserStorage } from './UserContext'

function App() {
  return (
    <div className=' bg-primary h-screen' >
      <UserStorage>
        <Modal />
        {/* <Header /> */}
        <div className='grid grid-cols-2 max-w-screen-lg m-auto gap-5 pt-10 '>
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
