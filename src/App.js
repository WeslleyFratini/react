import React, { useState } from 'react'
import Tasks from "./components/task"
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar programação',
      completed: false
    },
    {
      id: '2',
      title: 'Estudar matematica',
      completed: true,
    }
  ])

  return (
    <>
      <div className="container">
        <Tasks />
    </div>
    </>
  )
}

export default App;