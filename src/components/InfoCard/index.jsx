import "./style.css"


const InfoCard = ({infoTitle,taskCounter}) => {
    return(
        <div className="infoContainer">
            <div>
                <p className="title">{infoTitle}</p>
            </div>
            <div className="counter">{taskCounter}</div>
        </div>
    )
}

export default InfoCard