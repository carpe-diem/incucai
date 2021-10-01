import { GeneralInfo } from "../components/generalInfo/GeneralInfo"
import incucaiImg from '../images/incucai.png'

export const Incucai =()=>{
    return(
        <>
           <GeneralInfo 
                title={"¿Qué es el INCUCAI?"}
                description={`
                <p>El Instituto Nacional Central Único Coordinador de Ablación e Implante (INCUCAI) es el organismo que impulsa, normaliza, coordina y fiscaliza las actividades de donación y trasplante de órganos, tejidos y células en Argentina. Actúa en las provincias argentinas junto a 24 organismos jurisdiccionales de ablación e implante con el fin de brindar a la población un acceso trasparente y equitativo al trasplante.</p> 
                <p>El INCUCAI es un ente descentralizado dependiente de la Secretaría de Políticas, Regulación e Institutos del Ministerio de Salud (Argentina). Sus acciones se orientan a dar cumplimiento efectivo a la Ley de Trasplante de Órganos, normativa que establece las líneas de su funcionamiento, para satisfacer la demanda de los pacientes que esperan un trasplante.</p>
                <p>La misión del INCUCAI es promover, regular y coordinar las actividades relacionadas con la procuración y el trasplante de órganos, tejidos y células en Argentina, garantizando transparencia, equidad y calidad. La visión apunta a construir un sistema inserto en la estructura sanitaria que sea capaz de generar respuestas a las múltiples demandas de trasplantes, sustentado por la confianza y la actitud positiva de la comunidad hacia la donación.</p>
                `}
                image={incucaiImg}
           />
        </>
    )
}