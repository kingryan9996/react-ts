import React from "react";

import Todo from "../models/todo";

const TodoItem:React.FC<{items:Todo}> = (props) => {
    return <li>{props.items.text}</li>
}

export default TodoItem;