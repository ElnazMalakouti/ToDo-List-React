import "./style.css"
import { FaTrash } from 'react-icons/fa';

const Button = ({btnTitle}) => {
    return(
        <div className="buttonContainer">
            <div className="icon">
                <FaTrash/>
            </div>
            <div>
                <p>{btnTitle}</p>
            </div>
        </div>
    )
}

export default Button