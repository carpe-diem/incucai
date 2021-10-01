import { Switch, Route } from "react-router-dom";
import { Home } from "../pages/Home"
import { ListaEspera } from "../pages/ListaEspera";
import { Incucai } from "../pages/Incucai";
import { Organos } from "../pages/Organos";
import { Tejidos } from "../pages/Tejidos"
import { NotFound } from "../components/notFound/NotFound";

export const Router =()=>{
    return(
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/listaespera" component={ListaEspera} />
                <Route exact path="/incucai" component={Incucai} />
                <Route exact path="/organos" component={Organos} />
                <Route exact path="/tejidos" component={Tejidos} />
                <Route>
                    <NotFound />
                </Route>
            </Switch>
    )
}