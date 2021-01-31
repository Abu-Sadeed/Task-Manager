import Tasks from './Tasks'

const Task = ({ tasks, action, onToggle }) => {
    

    return (
        <>
            {tasks.map((task) => (
            <Tasks key={task.id} task={task} action={action} onToggle={onToggle}/>))}
        </>
    )
}

export default Task
