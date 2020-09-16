import React, { useReducer, useEffect } from 'react'
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import {TodoAdd} from './TodoAdd'
import './styles.css';

// const initialState = [
//     {
//         id: new Date().getTime(),
//         desc: 'Aprender React',
//         done: false
//     }
// ];


const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false
    // }];
}

export const TodoApp = () => {

    //Al momento de llamar init el valor que retorne va a ser el initialState
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleDelete = (todoId) => {
        //Crear la acción
        const action = {
            type: 'delete',
            payload: todoId
        };
        //dispatch
        dispatch(action);
    }

    const handleToggle = (todoId) => {
        const action = {
            type: 'toggle',
            payload: todoId
        }
        dispatch(action);
    }

  

    const handleAddTodo=(newTodo)=>{
        dispatch({
            type: 'add',
            payload: newTodo
        });
    }

    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={todos} 
                        handleDelete={handleDelete} 
                        handleToggle={handleToggle} 
                    />
                </div>
                <div className="col-5">
                <TodoAdd handleAddTodo={handleAddTodo}/>
                </div>
            </div>
        </div>
    )
}
