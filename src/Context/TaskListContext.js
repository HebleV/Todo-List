import React, {createContext, useState} from 'react'

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
    const [tasks, setTasks] = useState([
        {title: 'Read a book', id:1},
        {title: 'Get up early', id:2},
        {title: 'Go for a jog', id:3},
    ]);
    return (
        <TaskListContext.Provider value={{ tasks }}>
            {props.children}
        </TaskListContext.Provider>
    )
}

export default TaskListContextProvider;