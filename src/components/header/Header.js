import { Nav } from "../nav/Nav"
import "./Header.css"

export const Header =()=>{
    return(
        <header className="header">
            <div className="row principal-container">
                <img className="logo" alt="logo" src="./images/logo.png" />
                <p className="text-grey">Análisis de lista de espera de órganos y tejidos</p>
            </div>
            <Nav />
        </header>
    )
}