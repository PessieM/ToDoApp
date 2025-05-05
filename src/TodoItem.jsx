import React from 'react';

function TodoItem({ task, onRemove }) {
    return (
        <li className="task-item">
            { task }
            <button className="remove-button" onClick={onRemove}>Remove</button>
        </li>
    );
}

export default TodoItem;