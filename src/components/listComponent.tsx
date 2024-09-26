import ButtonComponent from './ButtonComponent'
import { ReactSetState, type Datas } from '../types/utils'
import { MdDelete } from "react-icons/md";

type List = {
    todo: Datas[];
    setTodo: ReactSetState<Datas[]>;
}

const listComponent = ({todo, setTodo}: List) => {

    const handleDelete = (id:string) => {
        setTodo(item=> item.filter(list=> list.id !== id))
    }

  return  todo.map((list,index)=>(
    <div key={list.id} className='w-full flex justify-between items-start border rounded-sm border-slate-700 pl-2 mt-2 mr-1 py-3'>
        <h3>{index + 1}</h3><h3>{list.data}</h3>
        <ButtonComponent onClick={()=> handleDelete(list.id)}><MdDelete color='red' size={20}/></ButtonComponent>
    </div>
    ))
}

export default listComponent
