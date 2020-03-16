


import React from 'react'
import {useDispatch} from 'react-redux'
import {DELETE_ITEMS} from './itemTodo.actions'
//ItemTodo is an "li" element
const ItemTodo=({item})=>{

    const dispatch = useDispatch()

    const handleDelete=()=>{
        dispatch(DELETE_ITEMS(item.id))
    }
    return <li onClick={handleDelete}  key={item.id}> {item.label} </li>
}

export default ItemTodo