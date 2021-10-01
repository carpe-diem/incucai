import './NotFound.css';
import ErrorImg from '../../images/error.jpg'

export const NotFound =()=>{
    return(
        <div className="center">
            <img className="w100" alt="error" src={ErrorImg} />
        </div>
    )
}