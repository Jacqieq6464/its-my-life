import { useState } from 'react'
import Header from "./components/Header"
import Tasks from "./components/Tasks"



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


  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete=
      {deleteTask} />
      ): (
        'No tasks to show!  Its a good time to start'

      )
      }

      
    
      
    </div>
  );
}

export default App;
