import "./Nav.css"
import React, { useState } from "react";

import { Link } from "react-router-dom";

export const Nav =()=>{
    const [order, setOrder] = useState("")

    return (
        <nav className="nav">
            <ul className="row container-menu">
                <li onClick={()=>setOrder("home")} className={order === "home" ? "li-active" : null}>
                    <Link to="/">HOME</Link>
                </li>
                <li onClick={()=>setOrder("incucai")} className={order === "incucai" ? "li-active" : null}>
                    <Link to="/incucai">INCUCAI</Link>
                </li>
                <li onClick={()=>setOrder("organos")} className={order === "organos" ? "li-active" : null}>
                    <Link to="/organos">ÓRGANOS</Link>
                </li>
                <li onClick={()=>setOrder("tejidos")} className={order === "tejidos" ? "li-active" : null}>
                    <Link to="/tejidos">TEJIDOS</Link>
                </li>
                <li onClick={()=>setOrder("espera")} className={order === "espera" ? "li-active" : null}>
                    <Link to="/listaespera">LISTA DE ESPERA</Link>
                </li>
            </ul>
        </nav>
    )
}