import "./style.css"
import { FaEdit } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';

const TodoCard = ({dataState,setDataState}) => {

    const taskId = dataState && dataState.map(item => item.id)
    const taskText = dataState && dataState.map(item => item.text)
    const taskInDone = dataState && dataState.map(item => item.inDone)


    return(
        <div className="cardDiv">
            <div className="leftPanel-cardDiv">
                <button id={taskId} className="taskDoneBtn-off"></button>
                <p className="taskTitle">{taskText}</p>
            </div>
            <div className="rightPanel-cardDiv">
                <FaEdit/>
                <FaTrash/>
            </div>
        </div>
    )
}

export default TodoCard