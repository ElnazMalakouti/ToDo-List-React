import { useState } from "react"
import "./style.css"

const Input = ({dataState , setDataState}) => {

    const [inputState , setInputState] = useState('')
    


    
     function clickHandle () {
       const temp = 
            {
                id : Date.now().toString(36),
                text : inputState,
                isDone : false
            }
         setDataState([...dataState , temp])
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