import "./style.css"

const EditTask = ({editTaskShow , setEditTaskShow}) => {
    return(
    <div className={editTaskShow ? 'editTask-show' : 'editTask-hide'}>
      <div className='closeBtnDiv'>
        <button className='closeBtn'></button>
      </div>
      <div className='editInfo'>
        <h1>Edit task</h1>
        <h3>Task Name</h3>
      </div>
    </div>
    )
}

export default EditTask