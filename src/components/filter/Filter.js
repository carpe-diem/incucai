import './Filter.css';
import React, { useState } from "react";
import { AppContext } from "../../utils/context";
import { Btn } from '../btn/Btn';

export const Filter =()=>{
    const { newData2019, setNewData2019, btnSort, setBtnSort,showAll, setShowAll } = React.useContext(AppContext);
    
    const [order, setOrder] = useState("")

    const sort =(lista, obj)=>{
        let listSorted = lista.sort(function(a, b){
            if(a[obj] < b[obj]) { return btnSort?-1:1; }
            if(a[obj] > b[obj]) { return btnSort?1:-1; }
            return 0
        })
        setBtnSort(!btnSort)
        return setNewData2019([...listSorted])    
    }
   
    return(
        <div className="filter row">
            <div className="container-sort row center">
                 <Btn 
                name={"Ordenar por provincia"}
                onClick={()=>sort(newData2019,"provincia_nombre") & setOrder("provincia")}
                value={btnSort}
                classBtn={order === "provincia" ? "btn-active" : null}
                />
                <Btn 
                    name={"Espera de órganos"}
                    onClick={()=>sort( newData2019 ,"paciente_lista_espera_organos_canti") & setOrder("organos")}
                    value={btnSort}
                    classBtn={order === "organos" ? "btn-active" : null}
                />
                <Btn 
                    name={"Espera de tejidos"}
                    onClick={()=>sort(newData2019,"pacientes_lista_espera_tejidos_cant") & setOrder("tejidos")}
                    value={btnSort}
                    classBtn={order === "tejidos" ? "btn-active" : null}
                />
            </div>
            <div className="container-filter row center">
                <Btn 
                name={`Ver totales ${showAll ? "nacionales" : "provinciales"}`}
                onClick={()=>setShowAll (!showAll)}
                value={showAll}
                classBtn="btn-bordo"
            />
            </div>
        </div>
    )
}