import { useEffect, useState } from 'react'
import './App.css'
import {TodoProvider} from './context'
import { TodoForm, TodoItem } from './components'

export default function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos(prevTodos => [{id: Date.now(), ...todo},...prevTodos])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map(prevtodo => (
      prevtodo.id === id ? todo : prevtodo
    )))
  }

  const deleteTodo = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos(prevTodos => 
      prevTodos.map(prevtodo => 
        prevtodo.id === id ? {...prevtodo, 
          completed: !prevtodo.completed}: prevtodo))
  }
  
  // this marks the completion of basic context functionality

  // Now, localStorage.

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))
    if(todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])
  
  // Yes, we can use multiple useEffect. We need to add to localStorage upon a change in todos, But we don't want to get everything again, hence, another useEffect().
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  return ( 
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */} 
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map(todo => (
              <div key={todo.id} 
              className='w-full'
              >
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}
