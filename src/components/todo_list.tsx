import React, { useState } from 'react'
import InputComponent from './InputComponent'
import ButtonComponent from './ButtonComponent'
import { type Datas } from '../types/utils'
import ListComponent from './listComponent'

const todo_list = () => {
    const [todo, setTodo] = useState<Datas[]>([])
    const [input, setInput] = useState<string>('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setTodo(item=> [...item, {id: Date.now().toString(), data: input}])
        setInput("")
    }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
       <InputComponent input={input} setInput={setInput} />
       <ButtonComponent className="w-full bg-gray-700 p-2">ADD</ButtonComponent>
      </form>
      <div className='h-52'>
       <ListComponent todo={todo} setTodo={setTodo} />
      </div>
    </div>
  )
}

export default todo_list
