import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Search_panel from './component/Search_panel'
import Todo_container from './component/Todo_container'
import axios from 'axios'

function App() {
    const [todos, setTodo] = useState([]);

    useEffect(() => {
        fetchTodo()
    }, [])

    function fetchTodo() {
        axios.get('http://localhost:3000/get')
            .then(result => setTodo(result.data))
            .catch(err => console.log(err))
    }

    return (
        <>
            <Navbar />
            <Search_panel fetchTodo={fetchTodo} />
            <Todo_container todos={todos} fetchTodo={fetchTodo} />
        </>
    )
}

export default App
