const JournalEntries = ({journalEntries}) => {


    return (
        <>
        {journalEntries.map((journal) => (
            <h3 key={journal.id}>{journal.text}</h3>

        
        ))}
            
        </>
    )
}

export default JournalEntries
