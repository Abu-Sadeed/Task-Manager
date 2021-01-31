import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const Tasks = ({ task, action, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text} 
                <IconButton aria-label="delete" onClick={() => action(task.id)}>
                    <DeleteIcon />
                </IconButton>
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Tasks
