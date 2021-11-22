import { useState } from 'react'
import Header from "./components/Header"
import JournalEntries from "./components/JournalEntries"


function App() {
  const [journalEntries, setJournals] = useState([
  {id: 1,
      text: 'Journal Entry Monday',
      time: 'am/pm',
      reminder: 'true',
  },
  
  {id: 2,
      text:'Journal Entry Tuesday',
      time: 'am/pm', 
      reminder: 'true',
  },
  
  {id: 3,
      text:'Journal Entry Wednesday',
      time: 'am/pm',
      reminder: 'true', 
  }
  ])
  
  return (
    <div className="container">
      <Header />
      <JournalEntries journalEntries={journalEntries}/>
    </div>
  );
}

export default App;
