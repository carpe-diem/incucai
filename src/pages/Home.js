import { GeneralInfo } from "../components/generalInfo/GeneralInfo"
import unajImg from '../images/unaj.png'

export const Home =()=>{
    return(
        <>
           <GeneralInfo 
                title={"TRABAJO INTEGRADOR"}
                description={`
                <p>El trabajo realizado se trata del análisis/desarrollo de una aplicación relacionada con la explotación de datos abiertos suministrados por el Ministerio de Salud y por la Secretaría de Innovación Pública.</p>
                <p>En la actualidad existe una Ley de Acceso a la Información Pública donde se establece que la información del Estado debe ser accesible para todas las personas y estar disponible en formatos electrónicos abiertos para facilitar su circulación y redistribución. 
                El ejercicio del derecho de acceso a la información pública fortalece la participación ciudadana, las políticas públicas, la gestión pública y por ende la gobernabilidad democrática.
                El fin de contar con los Datos Abiertos es el fortalecimiento del rendimiento de cuentas y la mejora de la vida en ciudadanía.</p>
                <p>Con el presente trabajo se intenta analizar la lista de espera de órganos y tejidos provista por el INCUCAI. Para ello hemos trabajado con los datos provistos por dicho Organismo correspondiente a los años 2018 y 2019. Se a analizado si la cantidad de donantes (tanto de órganos como de tejidos) se ha incrementado o si ha disminuido. A su vez se trabajó con un .json de la Secretaría de Innovación Pública para armar un mapa con la incidencia en cada una de las zonas.</p>
                <p>Para acceder a los datos hemos ingresado a las siguientes páginas web:</p>
                <p><a href="https://datos.gob.ar/dataset/salud-pacientes-lista-espera-incucai">https://datos.gob.ar/dataset/salud-pacientes-lista-espera-incucai</a></p>
                <p><a href="https://datos.gob.ar/ar/dataset/jgm-servicio-normalizacion-datos-geograficos/archivo/jgm_8.2">https://datos.gob.ar/ar/dataset/jgm-servicio-normalizacion-datos-geograficos/archivo/jgm_8.2</a></p>
                `}
                image={unajImg}
           />
        </>
    )
}