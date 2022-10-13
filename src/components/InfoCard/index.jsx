import "./style.css"


const InfoCard = ({infoTitle , dataState , setDataState}) => {
    return(
        <div className="infoContainer">
            <div>
                <p className="title">{infoTitle}</p>
            </div>
            <div className="counter">
            {dataState.length}
            </div>
        </div>
    )
}

export default InfoCard