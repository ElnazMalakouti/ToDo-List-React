import { useState } from "react"
import "./style.css"

const Input = ({dataState , setDataState, taskCreateState , setTaskCreateState}) => {

    const [inputState , setInputState] = useState('')


    
    async function clickHandle () {
       const temp = 
            {
                id : Date.now().toString(36),
                text : inputState,
                isDone : false
            }
        await setDataState([...dataState , temp])
        setTaskCreateState(true)
    }


    return(
        <div className="input-btn-div">
            <input id="addInput" className="addInput" placeholder="New task" value={inputState} onChange={e => setInputState(e.target.value)}/>
            <button className="addBtn" onClick={clickHandle}>+</button>
            {console.log(dataState)}
        </div>
    )
}

export default Input