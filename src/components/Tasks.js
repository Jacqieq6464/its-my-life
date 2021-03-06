import Task from './Task'

// In this section we create the mapping of the task
const Tasks = ({tasks, onDelete, onToggle }) => {

    return (
       
       <>
         {tasks.map ((task) => (
           <Task key={task.id} task={task}  
           onDelete={onDelete}
            onToggle={onToggle}/>
         ))}
    </>
 )
}



export default Tasks

