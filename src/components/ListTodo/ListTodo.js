
import React from 'react'
import {useSelector} from 'react-redux'

const ListTodo=()=>{

    //useSelector to retrieve items from the Store
    const items = useSelector(state=>state.listTodoReducer.items)

    
    return <ul>
        {
            items.map(item=><ItemTodo key={item.id} item={item}/>)
        }
    </ul>
}

export default ListTodo