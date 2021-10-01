import { useEffect } from "react"
import { GeneralInfo } from "../components/generalInfo/GeneralInfo"
import Map from "../components/map/Map"
import { scrollToAnchor, maxOrganos2019 } from "../utils/getInfo"
import transplanteImg from '../images/transplante.jpg'

export const Organos =()=>{
    const KEY = process.env.REACT_APP_GOOGLE_MAP_KEY

    useEffect (()=>{
        setTimeout(() => {
            scrollToAnchor()
        }, 500)
    }, [])

    return(
        <>
           <GeneralInfo 
                title={"¿De que se trata la donación de órganos?"}
                description={`
                <p>El trasplante de órganos es el reemplazo de un órgano enfermo por otro sano. El donante es quien da el órgano y el receptor es quien recibe el órgano.</p>
                <p>Un órgano necesita recibir sangre a través de una o varias arterias y venas. Por tanto, al trasplantarlo requiere que esas arterias y/o venas sean “conectadas” a las del receptor, para que el órgano reciba la sangre que necesita para mantenerse con vida.</p>
                <p>Existe la posibilidad de donar órganos en vida, la donación de órganos entre personas vivas está permitida sólo entre parientes, siempre que no afecte la salud del donante y exista posibilidad de éxito en la operación de la persona que los recibe.</p>
                `}
                image={transplanteImg}
           />
           <div id="mapaOrganos"></div>
           <Map 
            googleMapURL={`{https://maps.googleapis.com/maps/api/js?key=${KEY}}`}
            loadingElement={<div style={{ height: "100%" }} />}
            containerElement={<div style={{ height: "800px" }} />}
            mapElement={<div style={{ height: "100%" }} />}
            tipoLista={"paciente_lista_espera_organos_canti"}
            max={maxOrganos2019}
            maxRadio={100}
           />
        </>
    )
}