import "./style.css"
import { FaEdit } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { useEffect, useState } from "react";

const EditTask = ({ editTaskShow, setEditTaskShow, dataState, setDataState }) => {


  const [editedTaskText, setEditedTaskText] = useState("")
  useEffect(() => {
    const temp = dataState && dataState.find(item => item.id === editTaskShow)
    console.log(temp)
    console.log(editTaskShow)
    temp && setEditedTaskText(temp.text)
  }, [editTaskShow])

  return (
    <div className={editTaskShow ? 'editTask-show' : 'editTask-hide'}>
      <div className='closeBtnDiv'>
        <button className='closeBtn' onClick={() => setEditTaskShow(null)}><><AiOutlineClose /></></button>
      </div>

      <div className='editInfo'>
        <p className="editTitle">Edit task</p>
        <p className="taskName">Task Name</p>
        <input className="editInput" value={editedTaskText} onChange={e => setEditedTaskText(e.target.value)} />
      </div>

      <div className="editBtnDiv">
        <button className="editBtn" onClick={() => {
          setDataState(dataState.map(item => {
            if (item.id === editTaskShow) {
              return { ...item, text: editedTaskText }
            } else {
              return item
            }
          }))
          setEditTaskShow(null)
        }}><><FaEdit /></>save</button>
      </div>

    </div>
  )
}

export default EditTask