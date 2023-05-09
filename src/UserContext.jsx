import { createContext, useEffect, useState } from "react";

export const UserContext = createContext()

export const UserStorage = ({ children }) => {
  const [showModal, setShowModal] = useState(false)
  const [todos, setTodos] = useState([])
  const [id, setId] = useState(0)
  const [currentTodo, setCurrentTodo] = useState('')

  const handleModal = () => {
    setShowModal((prevState) => !prevState)
  }

  const todo = {
    description: '',
    id: '',
    checked: false,
    priority: '',
    date: ''
  }

  const addTodo = (todo) => {
    setTodos((prevTodo) => [...prevTodo, todo])
    setId(id + 1)
    handleModal()
  }

  const updateChecked = (todo) => {
    const checkedTodo = todos.map((_todo) => {
      if (_todo.id === todo.id)
        return {
          ..._todo,
          checked: !_todo.checked
        }
      return _todo
    })
    setTodos(checkedTodo)
  }

  const deleteTodo = (todo) => {
    const filteredTodo = todos.filter(({ id }) => id !== todo.id)
    setTodos(filteredTodo)
  }

  useEffect(() => {
    console.log(todos)
  }, [addTodo])

  return (
    <UserContext.Provider value={{ todo, addTodo, todos, id, handleModal, showModal, updateChecked, setCurrentTodo, currentTodo, deleteTodo }}>
      {children}
    </UserContext.Provider>
  )
}