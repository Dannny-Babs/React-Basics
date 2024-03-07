import React, { useState } from 'react'

function TodoList() {
    const [todos, setTodos] = useState(["Eat breakfast", "Go to the gym", "Learn React", "Go to sleep"]);
    const [newtodo, setNewTodo] = useState("");

    function handleInputChange(event) {
        setNewTodo(event.target.value);
    }
    function AddTodo() {
        if (newtodo.trim() !== "") {
            setTodos(t => [...t, newtodo]);
            setNewTodo("");
        }
        else {
            document.querySelector('input').style.border = '2px solid red';
            document.getElementById('error').style.display = 'block';
        setTimeout(() => {
            document.querySelector('input').style.border = '';
            document.getElementById('error').style.display = 'none';
        }, 2000);
        }
    }
    function DeleteTodo(index) {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    }
    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTodos = [...todos];
            [updatedTodos[index], updatedTodos[index - 1]] = [updatedTodos[index - 1], updatedTodos[index]];
            setTodos(updatedTodos);
        }
    }
    function moveTaskDown(index) {
        if (index < todos.length - 1) {
            const updatedTodos = [...todos];
            [updatedTodos[index], updatedTodos[index + 1]] = [updatedTodos[index + 1], updatedTodos[index]];
            setTodos(updatedTodos);
        }
    }

    return (
        <div className='to-do-list'>
            <h2>To-do List</h2>
            <div>
                <input type="text" placeholder='Enter a task'
                    value={newtodo}
                    onChange={handleInputChange} />
                <button onClick={AddTodo} className='add-button'>
                    Add</button>
                <p id='error'>Type in something</p>

            </div>
            <ol>
                {todos.map((todo, index) =>
                    <li key={index}>
                        <span className="text">
                            {todo}
                        </span>
                        <button className='delete-button' onClick={() => DeleteTodo(index)}> Delete</button>
                        <button className='move-button' onClick={() => moveTaskUp(index)}> ⬆️</button>
                        <button className='move-button' onClick={() => moveTaskDown(index)}> ⬇️</button>

                    </li>)}
            </ol>

        </div>
    );
}

export default TodoList