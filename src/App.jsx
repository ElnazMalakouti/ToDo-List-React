import { useState } from 'react'
import './App.css'
import InfoCard from './components/InfoCard'
import InfoDoneCard from './components/InfoDoneCard'
import Input from './components/Input'
import TodoCard from './components/TodoCard'
import TaskDoneButton from './components/TaskDoneButton'
import TasksButton from './components/TasksButton'
import EditTask from './components/EditTask'

function App() {

  const [dataState , setDataState] = useState([])
  const [haveDoneTask , setHaveDoneTask] = useState(false)
  const [editTaskShow , setEditTaskShow] = useState("")
  
  

  return (
  <div className='wholePage'>
    <div className='todoDiv' style={editTaskShow ? {opacity : 0.2} : {opacity : 1}}>
      <p className='todoTitle'>Vue ToDo List</p>
      <div className='todoBox'>
        <div className='info-action-div'>

          <InfoCard
          infoTitle="Tasks" 
          dataState={dataState} 
          setDataState={setDataState}
          />

          <InfoDoneCard
           infoTitle="Tasks Done" 
           dataState={dataState} 
           setDataState={setDataState} 
           haveDoneTask={haveDoneTask}
           setHaveDoneTask={setHaveDoneTask}
           />

          {haveDoneTask ? <TaskDoneButton btnTitle="Tasks Done" dataState={dataState} setDataState={setDataState}/> : null}
          
          <TasksButton
           btnTitle="Tasks"
           dataState={dataState} 
           setDataState={setDataState}
          />

        </div>
        <div className='tasks-container'>
          {dataState && dataState.map(item => {
            return <TodoCard
             dataState={dataState}
             setDataState={setDataState}
             editTaskShow={editTaskShow}
             setEditTaskShow={setEditTaskShow}
             key={item.id}  
             taskId={item.id} 
             taskText={item.text}
            />
             })
             }
        </div>
        {/* {Boolean(editTaskShow) && <EditTask dataState={dataState} setDataState={setDataState}/>} */}
        <div className='add-input-div'>
          <Input dataState={dataState} setDataState={setDataState}/>
        </div>
      </div>
    </div>
    {Boolean(editTaskShow) && <EditTask dataState={dataState} setDataState={setDataState} editTaskShow={editTaskShow} setEditTaskShow={setEditTaskShow}/>}
    {/* {editTaskShow ? <EditTask editTaskShow={editTaskShow} setEditTaskShow={setEditTaskShow}/> : null} */}
  </div>
  )
}

export default App
