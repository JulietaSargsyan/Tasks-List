import React from 'react'
import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);
    const [time, setTime] = useState('')


    const onSubmit = (e) => {
        e.preventDefault();


        if(!text) {
            alert('Please add task');
            return
        }

        onAdd({ text, day, reminder, time });

        setText('')
        setDay('')
        setReminder(false)
        setTime('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type='text'
                  placeholder='Add Task' 
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Day</label>
                <input type='date' 
                       placeholder='Add day and time'
                       value={day}
                       onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Time</label>
                <input type='time' 
                       placeholder='Add day and time'
                       value={time}
                       onChange={(e) => setTime(e.target.value)}/>
            </div>
            <div className="form-control ">
                <label className='form-control-check'>Set reminder
                  <input type='checkbox' 
                     checked={reminder}
                      value={reminder}
                      onChange={(e) => setReminder(e.currentTarget.checked)}/>
                  <span className='checkmark'></span>
                </label>
               
            </div>


            <input className='submit' type='submit' value='Save Task'/>
            
        </form>
    )
}

export default AddTask
