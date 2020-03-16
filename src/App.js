import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import {useDispatch} from 'react-redux'
import ListTodo from './components/ListTodo/ListTodo';


const TEST_LIST_ITEMS = [{
  id:1,
  label: "Item 1"
},
{
  id:2,
  label: "Item 2"
},
{
  id:3,
  label: "Item 3"
}]

function App() {

  //dispatch function used to perform actions on the Store
  const dispatch = useDispatch()

  //useEffect equivalante to componentDidMound when the second argment is []
  useEffect(()=>{
    //set list of todo items
    dispatch(SET_ITEMS(TEST_LIST_ITEMS))
  },[])


  return (
    <div className="App">

    <ListTodo />
      
    </div>
  );
}

export default App;
