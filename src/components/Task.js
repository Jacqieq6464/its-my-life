import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete,  onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : '' }`} onDouble Click={() =>
        onToggle (task.id)} >
            <h3>
                {task.text}{' '}
                <FaTimes 
                style={{ color:'red', cursor:'pointer'}} 
                // please note - when you click the x icon the entry will be deleted/hidden you can refresh page until we connect the live routes
                onClick={() => onDelete(task.id)}/>
                </h3>
            <p>{task.time}</p>
        </div>
    )
}

export default Task
