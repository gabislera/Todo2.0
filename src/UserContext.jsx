import { createContext, useState } from "react";

export const UserContext = createContext()

const TODOS_STORAGE_KEY = "todos";

const saveTodosToLocalStorage = (teste) => {
  localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(teste));
}

const getTodos = () => {
  const result = localStorage.getItem(TODOS_STORAGE_KEY)
  return JSON.parse(result) ?? []
}

const storageTodo = getTodos()
export const UserStorage = ({ children }) => {
  const [todos, setTodos] = useState(storageTodo)
  const [id, setId] = useState(1)
  const [currentTodo, setCurrentTodo] = useState('')
  const [activeTodoId, setActiveTodoId] = useState(null)

  const addTodo = (todo) => {
    setTodos((prevTodo) => {
      const todoAux = {
        ...todo, id
      }
      const list = [...prevTodo, todoAux]
      saveTodosToLocalStorage(list)
      return list
    })
    setCurrentTodo(undefined)
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
    saveTodosToLocalStorage(editedTodo)
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
    saveTodosToLocalStorage(checkedTodo)
    setTodos(checkedTodo)
  }

  const deleteTodo = (todo) => {
    const filteredTodo = todos.filter(({ id }) => id !== todo.id)
    saveTodosToLocalStorage(filteredTodo)
    setTodos(filteredTodo)
  }

  return (
    <UserContext.Provider value={{
      addTodo,
      todos,
      updateChecked,
      setCurrentTodo,
      currentTodo,
      deleteTodo,
      editTodo,
      activeTodoId,
      setActiveTodoId
    }}>
      {children}
    </UserContext.Provider>
  )
}