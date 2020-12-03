import { Switch, Route } from 'react-router-dom';

import Produtos from './Pages/Produtos'
import Pedidos from './Pages/Pedidos'
import Contato from './Pages/Contato'


function Rotas() {
    return(
        <Switch>
            <Route exact path="/produtos" component={Produtos} />
            <Route exact path="/pedidos" component={Pedidos} />
            <Route exact path="/contatos" component={Contato} />
        </Switch>
    )
}

export default Rotas;