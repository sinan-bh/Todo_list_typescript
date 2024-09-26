import React, { useState } from 'react'

type Datas = {
    id: string,
    data: string,
}

const todo_list = () => {
    const [todo, setTodo] = useState<Datas[]>([])
    const [input, setInput] = useState<string>('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setTodo(item=> [...item, {id: Date.now().toString(), data: input}])
        setInput("")
    }

    const handleDelete = (id:string) => {
        setTodo(item=> item.filter(list=> list.id !== id))
    }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" className='w-full p-2 rounded-sm' placeholder='todo-list....' value={input} onChange={(e)=> setInput(e.target.value)}/>
        <button>ADD</button>
      </form>
      <div>
        {todo.map((list,index)=>(
        <div key={list.id}>
            <h3>{index + 1}</h3><h3>{list.data}</h3>
            <button onClick={()=> handleDelete(list.id)}>delete</button>
        </div>
        ))}
      </div>
    </div>
  )
}

export default todo_list
