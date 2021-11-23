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
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
      
    </div>
  );
}

export default App;
