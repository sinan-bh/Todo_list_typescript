import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo_list from './components/todo_list'

function App() {

  return (
    <div className='text-blue-500'>
      <h2 className='text-3xl font-bold'>Todo List</h2>
      <div>
        <Todo_list />
      </div>
    </div>
  )
}

export default App
