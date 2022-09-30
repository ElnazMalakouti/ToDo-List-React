import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import InfoCard from './components/InfoCard'
import Input from './components/Input'
import TodoCard from './components/TodoCard'

function App() {

  const [dataState , setDataState] = useState([])
  const [taskCreateState , setTaskCreateState] = useState(false)
  


  return (
    <div className='todoDiv'>
      <p className='todoTitle'>Vue ToDo List</p>
      <div className='todoBox'>
        <div className='info-action-div'>
          <InfoCard infoTitle="Tasks" taskCounter="2"/>
          <InfoCard infoTitle="Tasks Done" taskCounter="2"/>
          <Button btnTitle="Tasks Done"/>
          <Button btnTitle="Tasks"/>
        </div>
        <div className={taskCreateState ? 'tasks-div-visible' : 'tasks-div-hidden'}>
          <TodoCard dataState={dataState} setDataState={setDataState} taskTitle="reading some books"/>
        </div>
        <div className='add-input-div'>
          <Input dataState={dataState} setDataState={setDataState} taskCreateState={taskCreateState} setTaskCreateState={setTaskCreateState}/>
        </div>
      </div>
    </div>
  )
}

export default App
