import "./Main.css"
import React, { useEffect } from "react";
import { Card } from "../card/Card"
import { Filter } from "../filter/Filter"
import { AppContext } from "../../utils/context";
import { data2018 } from "../../data/dataIncucai2018";
import { data2019 } from "../../data/dataIncucai2019";

export const Main =()=>{
    const { newData2018, newData2019, setNewData2019, setNewData2018, showAll } = React.useContext(AppContext);

    let dataProvincias = data2019.filter( (d) =>  d.provincia_nombre !== "Argentina")
    let dataNacion = data2019.filter( (d) => d.provincia_nombre === "Argentina")
    let dataProvinciasPrev = data2018.filter( (d) =>  d.provincia_nombre !== "Argentina")
    let dataNacionPrev = data2018.filter( (d) => d.provincia_nombre === "Argentina")
   
    useEffect (()=>{
        if (showAll){
            setNewData2019(dataProvincias)
            setNewData2018(dataProvinciasPrev)            
        } else {
            setNewData2019(dataNacion)
            setNewData2018(dataNacionPrev)
        }
    // eslint-disable-next-line
    }, [showAll])

    const getProv2018 =(data2019)=>{
       return(
           newData2018.find( (d) => d.provincia_nombre === data2019.provincia_nombre) 
       ) 
    }
   
    return (
        <main className="column">
            <div className="row">
                <Filter />
            </div>
            <div className="container-cards row">
               { 
                    newData2019.length > 0 ? newData2019.map((data2019, index)=>{
                        return(
                            <Card 
                                key={data2019.provincia_nombre}
                                region={data2019.provincia_nombre}
                                organos={data2019.paciente_lista_espera_organos_canti}
                                organos_prev_key={index}
                                organos_prev={getProv2018(data2019).paciente_lista_espera_organos_canti}
                                tejidos={data2019.pacientes_lista_espera_tejidos_cant}
                                tejidos_prev_key={index}
                                tejidos_prev={getProv2018(data2019).pacientes_lista_espera_tejidos_cant}
                            /> 
                        )
                    }) : null  
                }
            </div>
        </main>
    )
}