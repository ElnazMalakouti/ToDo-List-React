import "./style.css"
import { FaTrash } from 'react-icons/fa';

const TasksButton = ({btnTitle , dataState , setDataState}) => {
    return(
        <button className="buttonContainer" onClick={() => setDataState([])}>
            <span className="icon">
                <FaTrash/>
            </span>
            <span>
                <p>{btnTitle}</p>
            </span>
        </button>
    )
}

export default TasksButton