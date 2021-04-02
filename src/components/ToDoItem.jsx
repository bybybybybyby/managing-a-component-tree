import React, { useState } from "react";

function ToDoItem(props) {
    const [lineThru, setLineThru] = useState(false);

    function handleClick() {
        setLineThru(prevValue => {
            return !prevValue;
        });
    }

    return (
        <div onClick={handleClick}>
            <li style={{ textDecoration: lineThru ? 'line-through' : 'none' }}>
                {props.item}
            </li>
        </div>
    )
}

export default ToDoItem;