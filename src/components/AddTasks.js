

const AddTasks = () => {
    return (
        <form className='add-form'>
           <div className='form-control'>
               <label>Journal entry</label>
                <input type='text' placeholder='Add Journal entry' />
           </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type='text' placeholder='Add day & time' />
        </div>
        <div className='form-control'>
            <label>Set Reminder</label>
            <input type='checkbox' />
     </div>
     <input type='submit'value='Save Entry'/>
   </form>


    )
}   

export default AddTasks
