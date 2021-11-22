import JournalEntry from "./JournalEntry"

const JournalEntries = ({journalEntries}) => {
    return (
        <>
        {journalEntries.map((journal) => (
            <JournalEntry key={journal.id}>{journal.text}</JournalEntry>

        
        ))}
            
        </>
    )
}

export default JournalEntries
