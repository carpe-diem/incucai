import './Btn.css';

export const Btn =(props)=>{
    return(
        <button className={`btn text-16 ${props.classBtn}`} onClick={props.onClick} value={props.value}>{props.name}</button>
    )
}