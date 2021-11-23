// In this section we create the mapping of the task
const Tasks = ({tasks}) => {

    return (
       
       <>
         {tasks.map ((task) => (
           <h3 key={task.id}>{task.text}</h3>)
         )}
    </>
 )
}



export default Tasks

