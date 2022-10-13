import "./style.css"


const InfoDoneCard = ({infoTitle , dataState , setDataState , haveDoneTask , setHaveDoneTask}) => {
    var doneCounter = 0
    return(
        <div className="infoContainer">
            <div>
                <p className="title">{infoTitle}</p>
            </div>
            <div className="counter">
            {dataState && dataState.map(item => {
                    item.isDone ? doneCounter++ : item
                })
            }
            {doneCounter}
            {doneCounter ? setHaveDoneTask(true) : setHaveDoneTask(false)}
            </div>
        </div>
    )
}

export default InfoDoneCard