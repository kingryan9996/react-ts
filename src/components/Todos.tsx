import React from "react";

import Todo from "../models/todo";
import TodoItem from "./TodoItem";

// const Todos:React.FC<{items: string[]}> = (props) => {
    // 클래스로 만들어서 프롭스 수정.
const Todos:React.FC<{items: Todo[]}> = (props) => {
    // props, children 등 모든 것의 타입을 지정하는일은 매우 번거로우므로,
    // Recat타입을 쓰는데, React.FC(함수형 컴포넌트)라고 써준다.
    // React.FC라고 작성함으로써, 함수형컴포넌트로 동작한다는 걸 명확히 하는 것.
    return <ul>
        {props.items.map((item)=>{
            // return <li key={item.id}>{item.text}</li> // 1번
            return <TodoItem key={item.id} items={item}/> // 2번
        })}
    </ul>
}

export default Todos;