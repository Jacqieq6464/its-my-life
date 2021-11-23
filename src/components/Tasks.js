import Task from './Task'

// In this section we create the mapping of the task
const Tasks = ({tasks}) => {

    return (
       
       <>
         {tasks.map ((task) => (
           <Task key={task.id} task={task} />
         ))}
    </>
 )
}



export default Tasks

