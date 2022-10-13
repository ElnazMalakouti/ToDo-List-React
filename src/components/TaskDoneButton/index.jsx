import "./style.css"
import { FaTrash } from 'react-icons/fa';

const TaskDoneButton = ({btnTitle , dataState , setDataState}) => {
    const dataValue = dataState
    return(
        <button className="TaskButtonContainer" onClick={() => setDataState(dataState.filter(item => item.isDone===false))}>
            <span className="icon">
                <FaTrash/>
            </span>
            <span>
                <p>{btnTitle}</p>
            </span>
        </button>
    )
}

export default TaskDoneButton