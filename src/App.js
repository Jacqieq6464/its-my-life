import { useState } from 'react'
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTasks from "./components/AddTasks"



function App() {
  const [tasks, setTasks] = useState ([

    {id: 1,
        text: 'Begin Journal',
        time: 'am/pm',
        reminder: 'true',
    },
    
    {id: 2,
        text:'Update Journal',
        time: 'am/pm', 
        reminder: 'true',
    },
    
    {id: 3,
        text:'Time to reflect',
        time: 'am/pm',
        reminder: 'true', 
    
    },

])

//Delete tasks/journal entry
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !==id
))

}

//Toggle reminder section - 
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id 
  ? { ...task,reminder: 
    !task.reminder} : task
    ))

}


  return (
    <div className="container">
      <Header />
      <AddTasks />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete=
      {deleteTask}  onToggle={toggleReminder}/>
      ): (
        'No tasks to show!  Its a good time to start'

      )
      }

      
    
      
    </div>
  );
}

export default App;
