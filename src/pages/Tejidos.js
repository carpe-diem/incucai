import { useEffect } from "react"
import { GeneralInfo } from "../components/generalInfo/GeneralInfo"
import Map from "../components/map/Map"
import { scrollToAnchor, maxTejidos2019 } from "../utils/getInfo"
import transplanteImg from '../images/transplante.jpg'

export const Tejidos =()=>{
    const KEY = process.env.REACT_APP_GOOGLE_MAP_KEY

    useEffect (()=>{
        setTimeout(() => {
            scrollToAnchor()
        }, 500)
    }, [])

    return(
        <>
           <GeneralInfo 
                title={"¿De que se trata la donación de tejidos?"}
                description={`
                <p>Los tejidos no necesitan arterias o venas que sean conectadas en el momento del trasplante. Son un conjunto de células que reciben la sangre a través de pequeñísimos vasos sanguíneos (imposibles de coser) y que se van desarrollando con el tiempo.</p>
                <p>La extracción de tejidos, a diferencia de la de los órganos, no precisa ser tan inmediata. Además, no es preciso que el corazón siga latiendo hasta que se realice la extracción, puede ser realizada a “corazón parado”. Los tejidos pueden ser preservados durante cierto tiempo, lo que permite organizar todo el operativo de implante de una forma relativamente más tranquila.</p>
                `}
                image={transplanteImg}
           />
            <div id="mapaTejidos"></div>
           <Map 
            googleMapURL={`{https://maps.googleapis.com/maps/api/js?key=${KEY}}`}
            loadingElement={<div style={{ height: "100%" }} />}
            containerElement={<div style={{ height: "800px" }} />}
            mapElement={<div style={{ height: "100%" }} />}
            tipoLista={"pacientes_lista_espera_tejidos_cant"}
            max={maxTejidos2019}
            maxRadio={40}
           />
        </>
    )
}