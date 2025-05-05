import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoApp() {
    const [currentInput, setCurrentInput] = useState('');
    const [toDoList, setToDoList] = useState([]);

    const handleInputChange = (event) => {
        setCurrentInput(event.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (currentInput.trim() !== '') {
            setToDoList([...toDoList, currentInput]);
            setCurrentInput('');
        }
    }

    const handleRemoveTask = (index) => {
        const newToDoList = toDoList.filter((_, i) => i !== index);
        setToDoList(newToDoList);
    }

    return (
        <div className="container">
            <h1 className="header">To Do List</h1>
            <form className="form">
                <input className="input-field" type="text" value={currentInput} onChange={handleInputChange}/>
                <button className="add-button" type="submit"onClick={handleFormSubmit}>Submit</button>
            </form>
            {toDoList.length === 0 && <p>No tasks available</p> }
            {toDoList.length > 0 &&
                <ul className="task-list">
                    {toDoList.map((item, index) => (
                        <TodoItem key={index} task={item} onRemove={() => handleRemoveTask(index)}/>
                    ))}
                </ul>
            }
        </div>
    );
}

export default TodoApp;