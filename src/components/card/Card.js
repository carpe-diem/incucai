import "./Card.css"

import redSirena from '../../images/red_sirena.svg'
import greenSirena from '../../images/green_sirena.svg'
import yellowSirena from '../../images/yellow_sirena.svg'


import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";

export const Card =(props)=>{

    const getPercent = (data2018, data2019) => {
        return Math.round(((data2019 * 100) / data2018)-100)
    }

    const getSirena = (data2018, data2019) =>{
        let info = getPercent(data2018, data2019)
        if (info > 0) {
            return redSirena
        } else if (info < 0) {
            return greenSirena
            } else return yellowSirena
    }

    return (
        <section className="card column">
            <div className="container-icono">
                <h2 className="text-16">{props.region}</h2>    
            </div>
            <div className="h-20 row">
                <h3 className="text-card">Pacientes en lista de espera de órganos: {props.organos}</h3>
                <div className="row container-percent">
                    <img className="icono" alt="arrow" src={getSirena(props.organos_prev, props.organos)} />
                    <h3 className="text-card" data-tip data-for={`tipOrganos-${props.organos_prev_key}`}>{getPercent(props.organos_prev, props.organos)}%</h3>
                    <ReactTooltip id={`tipOrganos-${props.organos_prev_key}`} place="bottom" effect="float" type= "info">
                        Pacientes en 2018: {props.organos_prev}
                    </ReactTooltip>
                </div>
            </div>
            <div className="h-20 row">
                <h3 className="text-card">Pacientes en lista de espera de tejidos: {props.tejidos}</h3>
                
                <div className="row container-percent">
                    <img className="icono" alt="arrow" src={getSirena(props.tejidos_prev, props.tejidos)} />
                    <h3 className="text-card" data-tip data-for={`tipTejidos-${props.tejidos_prev_key}`}>{getPercent(props.tejidos_prev, props.tejidos)}%</h3>
                    <ReactTooltip id={`tipTejidos-${props.tejidos_prev_key}`} place="bottom" effect="float" type= "info">
                        Pacientes en 2018: {props.tejidos_prev}
                    </ReactTooltip>
                </div>
            </div>
            <div className="h-20 row center">
                <Link 
                    className="small-leter"
                    to={{pathname:"/organos",
                        hash:"#mapaOrganos"}} >
                            Mapa lista de órganos
                </Link>
                <Link 
                    className="small-leter"
                    to={{pathname:"/tejidos",
                        hash:"#mapaTejidos"}} >
                            Mapa lista de tejidos
                </Link>
            </div>
        </section>
    )
}