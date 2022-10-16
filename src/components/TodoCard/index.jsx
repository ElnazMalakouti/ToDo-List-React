import "./style.css"
import { FaEdit } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import { useState } from "react";

const TodoCard = ({taskId , taskText , dataState , setDataState , editTaskShow , setEditTaskShow}) => {

    const [taskDoneBtn , setTaskDoneBtn] = useState(false)


    return(
        <div className="cardDiv">
            <div className="leftPanel-cardDiv">
                <button id={taskId} onClick={()=>{
                    setTaskDoneBtn(!taskDoneBtn)

                    setDataState(dataState.map(item => {
                        if(item.id === taskId){
                            item.isDone = !item.isDone
                            return {...item}
                        }else{
                            return item
                        }
                    }))
                }} className={taskDoneBtn ? "taskDoneBtn-on" : "taskDoneBtn-off"}></button>
                <p className="taskTitle">{taskText}</p>
            </div>
            <div className="rightPanel-cardDiv">

                <button className="todoCard-hoverBtn" onClick={() => setEditTaskShow(taskId)}>
                    <><FaEdit/></>
                </button>

                <button className="todoCard-hoverBtn" onClick={() => {
                    setDataState(dataState.filter(item => item.id !== taskId))
                }}>
                    <><FaTrash/></>
                </button>
            </div>
        </div>
    )
}

export default TodoCard