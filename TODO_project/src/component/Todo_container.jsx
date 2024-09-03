import React, { useState } from 'react'
import axios from 'axios'
import './Todo_container.css'

const Todo_container = ({ todos, fetchTodo }) => {
    const [editId, setEditId] = useState(null);
    const [editedTask, setEditedTask] = useState('');

    function startEdit(id, task) {
        setEditId(id);
        setEditedTask(task);
    }

    function saveText(id) {
        axios.put(`http://localhost:3000/update/${id}`, { task: editedTask })
            .then(result => {
                setEditId(null);
                fetchTodo();
            })
            .catch(err => console.log(err))
    }

    function deleteText(id) {
        axios.delete(`http://localhost:3000/delete/${id}`)
            .then(result => fetchTodo())
            .catch(err => console.log(err))
    }

    return (
        <>
            <div className="mega-container">
                {todos.map((todo, index) => (
                    <div className="todo-list-box" key={index + 1}>
                        <div className="serial-number-box">
                            {index + 1}
                        </div>
                        {
                            editId === todo._id
                                ?
                                <input
                                    type='text'
                                    value={editedTask}
                                    onChange={(e) => setEditedTask(e.target.value)}
                                    onBlur={() => saveText(todo._id)}
                                    className="todo-name" id={index + 1}
                                    autoFocus
                                />
                                :
                                <div className="todo-name" id={index + 1}>
                                    {todo.task}
                                </div>
                        }
                        <div className="img-box">
                            <div className="edit-icon-box">
                                <img src="src\assets\edit-icon.gif" alt="edit" onClick={() => startEdit(todo._id, todo.task)} className="edit-icon" />
                            </div>
                            <div className="delete-icon-box">
                                <img src="src\assets\delete-icon.gif" alt="delete" onClick={() => deleteText(todo._id)} className="delete-icon" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Todo_container