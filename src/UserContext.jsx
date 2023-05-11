import { createContext, useEffect, useState } from "react";

export const UserContext = createContext()

// const initialData = {
//   title: '',
//   description: '',
//   id: '',
//   checked: false,
//   priority: '',
//   date: ''
// }

export const UserStorage = ({ children }) => {
  const [todos, setTodos] = useState([])
  const [id, setId] = useState(0)
  const [currentTodo, setCurrentTodo] = useState('')


  const addTodo = (todo) => {
    setTodos((prevTodo) => {
      const todoAux = {
        ...todo, id
      }
      return [...prevTodo, todoAux]
    })
    setId(id + 1)
  }

  const editTodo = (todo) => {
    const editedTodo = todos.map((_todo) => {
      if (_todo.id === todo.id)
        return {
          ...todo,
          id: _todo.id
        }
      return _todo
    })
    setTodos(editedTodo)
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

  // useEffect(() => {
  //   console.log(todos)
  // }, [addTodo])

  return (
    <UserContext.Provider value={{ addTodo, todos, updateChecked, setCurrentTodo, currentTodo, deleteTodo, editTodo }}>
      {children}
    </UserContext.Provider>
  )
}