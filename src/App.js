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
const deleteTask =(id) => {
console.log ('delete', id)

}


  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete=
      {deleteTask} />
      
    </div>
  );
}

export default App;
