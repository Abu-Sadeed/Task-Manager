import Header from './components/Header'
import Footer from './components/Footer'
import Task from './components/Task'
import AddTask from './components/AddTask'
import Circle from './components/Circle'
import { useState, useEffect } from 'react'

function App() {
  const[showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState('')

  useEffect(() => {

    const getTasks = async () => {
      const taskFromServer = await fetchTask()
      setTasks(taskFromServer)

    }
    
    getTasks()
  }, [])

  const fetchTask = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }


  const fetchOneTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }


  const addTask = async(task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),

      
    })
    console.log(res)
    const data = await res.json()

    setTasks([...tasks, data])
  }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchOneTask(id)
    const updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder }
 
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updateTask),
    })

    const data = await res.json()

    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task))
  }

  return (
    <main>
    <div className='container' >
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask}/>
      
      {showAddTask && <AddTask onAdd={addTask}/>}
      
      {tasks.length > 0 ? <Task tasks={tasks} action={deleteTask} onToggle={toggleReminder}/> : 'No tasks remaining!'}
      
      <Footer/>
      
    </div>
    <Circle bottom='5%' right='15%' height='15vh' width='15vh'/>
    <Circle bottom='22%' right='10%' height='10vh' width='10vh'/>
    <Circle bottom='35%' right='9%' height='5vh' width='5vh'/>
    </main>
  )
}

export default App
