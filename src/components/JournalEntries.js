import { useState } from 'react'


const JournalEntries = () => {
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
        <>
        {journalEntries.map((journal) => (
            <h3 key={journal.id}>{journal.text}</h3>

        
        ))}
            
        </>
    )
}

export default JournalEntries
