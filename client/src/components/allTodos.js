import React, {useEffect, useState} from 'react'
import EditTodo from './editTodo';

const ListTodo = () => {

    const [todos, setTodos] = useState([]);

    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos")
            const data = await response.json()

            setTodos(data)
            
            
        } catch (e) {
            console.error(e.message)
        }
    }

    console.log(todos)

    useEffect(() => {
        getTodos()
    }, [])

    const onDeleteTodo = async (id) => {
        try {
        const response = await fetch(`http://localhost:5000/todos/${id}`, {
            method : "DELETE"
        })

        const unDeletedTodos = todos.filter(todo => (todo.todo_id !== id))
        setTodos(unDeletedTodos)
    }
    catch(e) {
        console.error(e.message)
    }


    }
    return (
    <>
     <table className="table">
    <thead>
      <tr>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
      {todos.map(todo => (
        <tr key={todo.todo_id}>
            <td>{todo.description}</td>
            <td><EditTodo todo={todo}/></td>
            <td><button className='btn btn-danger' onClick={() => onDeleteTodo(todo.todo_id)}>Delete</button></td>
        </tr>
      ))}
    </thead>
    <tbody>
      
    </tbody>
    </table>
    </>
    )
}

export default ListTodo