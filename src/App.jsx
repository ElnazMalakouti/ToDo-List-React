import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import InfoCard from './components/InfoCard'
import Input from './components/Input'
import TodoCard from './components/TodoCard'

function App() {

  const [dataState , setDataState] = useState([])
  


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
        <div className='tasks-container'>
          {dataState && dataState.map(item => {
            return <TodoCard
             key={item.id} 
             taskId={item.id} 
             taskText={item.text}/>
             })
             }
        </div>
        <div className='add-input-div'>
          <Input dataState={dataState} setDataState={setDataState}/>
        </div>
      </div>
    </div>
  )
}

export default App
