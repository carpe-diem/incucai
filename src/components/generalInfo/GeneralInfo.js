import './GeneralInfo.css';
import parse from 'html-react-parser'

export const GeneralInfo =(props)=>{
    return(
        <div className="column container-info">
           <h2 className="center font-nunito">{props.title}</h2> 
           <div className="font-nunito">{parse(props.description)}</div>
           <div className="h50">
               <img className="icono" alt="logo" src={props.image} />
           </div>
        </div>
    )
}