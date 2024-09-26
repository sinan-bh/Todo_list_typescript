import ButtonComponent from './ButtonComponent'
import { ReactSetState, type Datas } from '../types/utils'

type List = {
    todo: Datas[];
    setTodo: ReactSetState<Datas[]>;
}

const listComponent = ({todo, setTodo}: List) => {

    const handleDelete = (id:string) => {
        setTodo(item=> item.filter(list=> list.id !== id))
    }

  return  todo.map((list,index)=>(
    <div key={list.id}>
        <h3>{index + 1}</h3><h3>{list.data}</h3>
        <ButtonComponent onClick={()=> handleDelete(list.id)}>delete</ButtonComponent>
    </div>
    ))
}

export default listComponent
