import React from 'react';
import TaskList from './Components/TaskList';
import TaskForm from './Components/TaskForm';
import Header from './Components/Header';
import TaskListContextProvider from './Context/TaskListContext';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className='app-wrapper'>
          <Header />
          <div className='main'>
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
}

export default App;
