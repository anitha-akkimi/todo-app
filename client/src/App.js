import React from 'react'
import InputTodo from './components/inputTodo';
import ListTodo  from './components/allTodos';

import './App.css';

function App() {
  return (
    <>
    <div className='container'>
    <InputTodo/>
    <ListTodo className="m-5"/>
    </div>
    </>
  );
}

export default App;
