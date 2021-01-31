import Header from './components/Header'
import Task from './components/Task'
import AddTask from './components/AddTask'
import { useState } from 'react'

function App() {
  const[showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Barbers Appointment',
        day: 'Feb 6th at 12:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Shopping',
        day: 'Feb 7th at 2:30pm',
        reminder: true,
    },
    {
        id: 4,
        text: 'Thesis Meeting',
        day: 'Feb 8th at 2:30pm',
        reminder: true,
    }
]
)

  const addTask = (task) => {
    const id = Math.floor(Math.random()*10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className='container' >
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask}/>
      {
        showAddTask && <AddTask onAdd={addTask}/>
      }
      
      {
        tasks.length > 0 ? <Task tasks={tasks} action={deleteTask} onToggle={toggleReminder}/> : 'No tasks remaining!'
      }
      
    </div>
  )
}

export default App
