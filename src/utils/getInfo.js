import { data2019 } from "../data/dataIncucai2019"
import { data2018 } from "../data/dataIncucai2018"

export const getProvincia = (provincia_nombre) => {
    return  data2019.find((d)=>{ return d.provincia_nombre===provincia_nombre})
  }

export const getProvincia2018 = (provincia_nombre) => {
return  data2018.find((d)=>{ return d.provincia_nombre===provincia_nombre})
}

export let maxOrganos2019 = Math.max.apply(Math, data2019.map(function(d) { 
    return  d.provincia_nombre !== "Argentina" ? d.paciente_lista_espera_organos_canti : null; }))
  
export let maxTejidos2019 = Math.max.apply(Math, data2019.map(function(d) { 
     return d.provincia_nombre !== "Argentina" ? d.pacientes_lista_espera_tejidos_cant: null; }))

export const getRadioProvincia = (provincia_nombre, lista_espera, max, maxRadio) => {
    let provincia = getProvincia(provincia_nombre)
    let cantidad = provincia[lista_espera]
    let regla_tres = (cantidad * 100) / max
    return cantidad < 1500 ? regla_tres * 2000 : maxRadio * 2000
  }

export const scrollToAnchor =()=> {
    let url_location = document.location + ''
    let anchorName = url_location.split("#")[1]
    if (anchorName) {
        let anchorElement = document.getElementById(anchorName);
        if(anchorElement) { anchorElement.scrollIntoView(); }
    }
}

