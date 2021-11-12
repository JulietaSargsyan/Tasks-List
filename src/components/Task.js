import { FaTimes} from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <div >
                <h3>
                    {task.text} 
                </h3>
                <p>{task.day } </p>
                <p> { task.time}</p>
            </div>
            <FaTimes className='close' onClick={() => onDelete(task.id)}/>
            
        </div>
    )
}

export default Task
